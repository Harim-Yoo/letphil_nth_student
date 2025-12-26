const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('.'));

// API endpoint 
// This endpoint is GET part in the server. When the frontend asks for '/api/greeting', the server runs the following function and sends JSON data.

app.get('/api/greeting', (req,res) => {
    console.log("!!! The server received a request for greeting !!!");
    const responseData = {
        text: "Hello! This message came from your Node.js server",
        timestamp: new Date()
    };

    res.json(responseData);
});

app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`);
})