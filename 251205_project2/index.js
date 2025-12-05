import fs from "fs";
import path from "path";
import readline from "readline";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILE_PATH = path.join(__dirname, 'text.txt' );
const readStream = fs.createReadStream(FILE_PATH, 'utf8');
const rl = readline.createInterface({ input: readStream });

let count = 0;
const words = ["unaware", "unconscious"];
const foundLines = [];

for await (const line of rl) {
    words.forEach(word => {
    if (line.includes(word)) {
        count++;
        foundLines.push(line);
    };
});
}

console.log(`Look, we have found '${words.join(",")}' in ${count} number of times.`);
console.log(foundLines);