const express = require("express");
const cors = require('cors');
const path = require('path');

const app = express();

const port = 3000;
app.use(cors());

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,"/public/index.html"));
})
app.get('/test', (req,res) => {
    const dataArray = [
        { name: "Alice", age: 26 },
        { name: "Bob", age: 25 },
        { name: "Charlie", age: 24 }
    ]
    res.json(dataArray); //stringify the data
    });

app.listen(port, () => {
    console.log(`http://localhost:${port} is now open.`)
});
