const { PDFParse } = require('pdf-parse');
const path = require('path');

const filePath = path.join(__dirname,"7Grade2011.pdf");

async function createText() {
    const data = new PDFParse({url: filePath});
    const texts = await data.getText();
    console.log(texts);
}
createText();
