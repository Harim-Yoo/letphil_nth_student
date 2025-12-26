const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());
app.use(express.static("."));

const messageDatabase = [];

app.get("/api/messages", (req, res) => {
  res.json(messageDatabase);
});

app.post("/api/messages", (req, res) => {
  const incomingData = req.body;

  const newMessage = {
    id: Date.now().toString(),
    text: incomingData.text,
    date: incomingData.date
  };

  console.log("I received and ID-ed", incomingData);
  messageDatabase.push(newMessage);
  res.json({status:"success", received:newMessage});
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
