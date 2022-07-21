var express = require('express');
var app = express();
const PORT=3000;
const HOST="0.0.0.0"

app.get('/', async (req, res) => {
    res.send("Hello World");
});


app.post('/', async (req,res) => {
    res.send("post is working")
});




app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);