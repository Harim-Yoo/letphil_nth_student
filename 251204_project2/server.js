import express from "express";
import problems from './problems.json' assert { type: 'json' };

const app = express();
const port = 5000;

app.use(express.static("public"));

app.get("/api/problems", (req,res) => {
    console.log("Sending Data");
    res.json(problems);
})

app.listen(port, () => {
    console.log(`Now the port is running at http://localhost:${port}`);
})