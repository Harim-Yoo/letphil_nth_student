const express = require("express");
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

const satQuestions = [
    {
        id: "1",                 // unique ID
        text: "If 3x + 12 = 24, what is the value of x + 4?",
        options: ["4", "6", "8", "12"],
        answer: "8",
        stage: "m1", // Module types : m1, m2_easy, m2_hard
        difficulty: "medium", // easy(score of 1), medium(score of 2), hard(score of 3)
        domain: "Algebra",            // Either Algebra, Geometry, DataAnalysis. or Trigonometry
        subdomain: "Linear equations",    // For further classification
        isActive: true,              // if there is some fallacy in the problem, we put this as false.
        imageUrl: null               // for plane geometry
    }
];

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
})

app.get('/test', (req, res) => {
    res.json(satQuestions); //stringify the data
});

app.post('/check', (req, res) => {
    const dataForCheck = req.body;
    const problemId = dataForCheck.id;
    const answerGuess = dataForCheck.guess;
    const problem = satQuestions.find(p => p.id === problemId);
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
