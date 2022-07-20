var express = require('express');
var app = express();
const PORT=3000;
const HOST="0.0.0.0"

app.get('/', async (req, res) => {
    res.send("Hello World");
});




app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);