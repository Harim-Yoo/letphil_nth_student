const fsp = require('fs').promises;

// async function callThis(file) {
//     fs.readFile(file, (err,data) => {
//         if (err) throw err;

//         const utf8String = data.toString('utf8');
//         const stringLower = utf8String.toLowerCase();
//         console.log(stringLower.trim());
//     })
// }

// function writeThis(txt) {
//     fs.writeFile('myNewFile.txt',txt, (err) => {
//     if (err) throw err;
//     return;
// })
// };

// if (writeThis("Hello World")) {
//     await callThis('myNewFile.txt');
// }

async function runFiles() {
    const fileName = 'myNewFile.txt';
    const content = "Hello World";

    try {
        await fsp.writeFile(fileName, content);
        console.log("File written completely.");

        const data = await fsp.readFile(fileName);
        const utf8String = data.toString('utf8');
        const stringLower = utf8String.toLowerCase();

        console.log(stringLower);
    } catch(err) {
        console.error(err);
    }
}

runFiles();