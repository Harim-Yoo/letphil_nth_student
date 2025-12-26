const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(cors());

app.get('/data', (req,res) => {
    const dataTosend = { name: "Alice", age:26 };
    return res.json(dataTosend);
});

app.post('/data/fetch', (req,res) => {
    const dataReceived = req.body;
    const ageReceived = dataReceived.age;
    res.json({ message: "Not underage" });
});


app.listen(PORT, () => {
    console.log(`Connected to http://localhost:${PORT}`);
})
