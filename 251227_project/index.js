// 1. Fetch JSON
// 2. Input : Text => Output : either error_message or `You passed.`
// 3. Iterations in the axioms.
// 4. Get caught for the regex, and return error_message.
// 5. Passing all, return `You passed.`
const policy = require("./security-policy.json");

function validateFunction(text) {
    for (const item of policy.axioms) {
        const pattern = new RegExp(item.pattern,'i');
        if (pattern.test(text)) {
            return item.error_message;
        }
    }
    return `You passed all.`
}
async function* fakeLLM() {
    const response = "Okay, sudo rm -rf /";
    for (const char of response) {
        await new Promise(r=>setTimeout(r,100));
        yield char
    }
}

async function runProxy() {
    const stream = fakeLLM();
    let buffer = "";

    for await (const chunk of stream) {
        buffer+= chunk;
        const result = validateFunction(buffer);
        if (result !== `You passed all.`) {
            console.log("BLOCK!");
            break;
        }
        process.stdout.write(chunk)
    }
}

runProxy();
