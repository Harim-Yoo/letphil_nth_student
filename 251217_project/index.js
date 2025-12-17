const express = require("express");
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;
const satQuestions = [
        { 
            id: 1, 
            text: "If 2x + 3 = 9, what is x?", 
            options: ["1", "2", "3", "4"], 
            answer: "3" 
        },
        { 
            id: 2, 
            text: "Which implies x > 0?", 
            options: ["x+1=0", "x-1=0", "x=0", "x=-5"], 
            answer: "x-1=0" 
        }
    ];

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,"/public/index.html"));
})

app.get('/test', (req,res) => {
    res.json(satQuestions); //stringify the data
    });

app.post('/check', (req,res) => {
    const dataForCheck = req.body;
    const problemId = dataForCheck.id;
    const answerGuess = dataForCheck.guess;
    const problem = satQuestions.find(p => p.id === problemId);
    if (!problem) {
        return res.status(404).json( { error : "Problem not found"});
    }
    if (answerGuess === problem.answer) {
        res.json( { correct: true } );
    } else {
        res.json( { correct: false } );
    }
})

app.listen(port, () => {
    console.log(`http://localhost:${port} is now open.`)
});
