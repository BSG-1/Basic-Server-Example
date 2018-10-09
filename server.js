//Quick setup of a server
const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
})

//routing
app.get("/", function (req, res) {
    res.send("<h1>Hello World, this is a Bahadur app</h1>")
})