import express from "express";
import mathProblems from "./mathData.js";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/problems/:id', (req,res) => {
    const problemId = parseInt(req.params.id);
    if (!problemId) {
        return res.status(400).json({ error: "Invalid ID"});
    }
    const problem = mathProblems[problemId-1];

    if (!problem) {
        return res.status(404).json({ error: "Problem not found"});
    }    
    res.json(problem);
})

app.get('/check/:id/:guess', (req,res) => {
    const pId = parseInt(req.params.id);
    const userGuess = parseInt(req.params.guess);

    const problem = mathProblems.find(p => p.id === pId);
    if (!problem) {
        return res.status(404).json( { error : "Problem not found"});
    }
    if (userGuess === problem.answer) {
        res.json( { correct: true } );
    } else {
        res.json( { correct: false } );
    }
})



app.listen(PORT, ()=> {
    console.log(`We have opened up a port at http://localhost:${PORT}`);
})