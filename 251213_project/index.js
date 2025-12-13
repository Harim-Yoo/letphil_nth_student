const fs = require('fs');

const rawBook = String.raw`
\textbf{Problems}

\textbf{1.} Here goes the first problem.\\
\bigskip
Answer : Here is the first answer\\
\textbf{Solution}\\
Here goes the solution for the first problem.\\
\\
\vfill

\textbf{2. }Here goes the second problem.\\
\bigskip
Answer : Here is the second answer\\
\textbf{Solution}\\
Here goes the solution for the second problem.\\
\\
\vfill\null
\newpage

  `;

function cleanText(text) {
    if (!text) return "";
    return text
        .replace(/\\bigskip|\\vfill|\\null|\\newpage|\\\\/g,"")
        .replace(/\s+/g," ")
        .trim();
}

const splitRegex = /\\textbf\{(\d+)\.\s*\}/;
const parts = rawBook.split(splitRegex);
let data = [];

for (let i=1; i<parts.length;i+=2) {
    const number = parts[i];
    const otherParts = parts[i+1];
    const solutionSplit = otherParts.split(/\\textbf\{Solution\}/);
    const problemAndAnswer = solutionSplit[0];
    const solutionRaw = solutionSplit[1];
    const answerSplit = problemAndAnswer.split(/Answer\s*:/);
    const problemRaw = answerSplit[0];
    const answerRaw = answerSplit[1];
    data.push({
        id: number,
        problem: cleanText(problemRaw),
        answer: cleanText(answerRaw),
        solution: cleanText(solutionRaw)
    });
}

fs.writeFileSync("book-data.json", JSON.stringify(data,null,2));