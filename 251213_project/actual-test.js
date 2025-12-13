const fs = require('fs');

const bookFiles = [
    'algebra',
    'counting1',
    'counting2',
    'probability1',
    'probability2'
];


function cleanText(text) {
    if (!text) return "";
    return text
        .replace(/\\bigskip|\\newpage|\\vfill|\\\\/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

function parseBookContent(content) {
    const splitRegex = /\\textbf\{(\d+)\.\s*\}/;
    const parts = content.split(splitRegex);
    let extractData = [];
    for (let i = 1; i < parts.length; i += 2) {
        const problemId = parts[i];
        const problemAndAnswer = parts[i + 1];
        const problemSplit = problemAndAnswer.split(/\\bigskip/);
        const problemRaw = problemSplit[0];
        const answerParts = problemSplit[problemSplit.length - 1];
        const answerSplit = answerParts.split(/Answer\s*:/);
        const answerRaw = answerSplit[answerSplit.length - 1];
        extractData.push({
            id: problemId,
            statement: cleanText(problemRaw),
            answer: cleanText(answerRaw),
        });
    }
    return extractData;
}

for (const bookFile of bookFiles) {
    try {
        const rawContent = fs.readFileSync(`${bookFile}.tex`, "utf8");
        const formattedBook = parseBookContent(rawContent);
        fs.writeFileSync(`${bookFile}.json`, JSON.stringify(formattedBook, null, 2));
        console.log(`Switched ${bookFile}.tex into ${bookFile}.json successfully.`);
    } catch (e) {
        console.error(e.message);
    }
}


