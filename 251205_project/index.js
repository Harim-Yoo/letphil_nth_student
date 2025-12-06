<<<<<<< HEAD
const API_URL = "https://pokeapi.co/api/v2/pokemon/pikachu";

async function getData(api_url) {
    try {
        const response = await fetch(api_url);
        if (!response.ok) {
            throw new error(`${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.error(error);
    }
 };

 getData(API_URL);
=======
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import express from "express";
import cors from "cors";

const app = express();
const port = 5000;
app.use(express.static('.'));
app.use(cors());


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const FILE_PATH = path.join(__dirname, 'test.json');

// console.log(FILE_PATH);

// const textFile = fs.readFileSync(FILE_PATH);
// console.log(textFile.toString('utf8'));

async function readFile(file_path) {
    const textFile = await fs.readFile(file_path,'utf8');
    const data = JSON.parse(textFile);
    const realData = data.problems;
    return realData;
}

app.get('/problems', async (req,res) => {
    try {
        const dataSet = await readFile(FILE_PATH);
        res.json(dataSet);        
    } catch(err) {
        console.error("This is error", err);
    }
})

app.listen(port, () => {
    console.log(`Now the port is running at http://localhost:${port}`);
})



>>>>>>> 13bdc2d4f1811738ed3b055479c5ccb03ab4305b
