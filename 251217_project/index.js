const express = require("express");
const cors = require('cors');
const path = require('path');
const DB = require("./db.js");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
})

app.get('/test', (req, res) => {
    res.json(DB.findAll()); //stringify the data
});

app.post('/check', (req, res) => {
    const dataForCheck = req.body;
    const problemId = dataForCheck.id;
    const answerGuess = dataForCheck.guess;
    const problem = DB.findById(problemId);
    if (!problem) {
        return res.status(404).json({ error: "Problem not found" });
    }
    if (answerGuess === problem.answer) {
        res.json({ correct: true });
    } else {
        res.json({ correct: false });
    }
})

app.listen(port, () => {
    console.log(`http://localhost:${port} is now open.`)
});
