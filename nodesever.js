const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("Hello NodeJS")
})

//Open Server
app.listen(port,() => {
    console.log("Server is Listening on port: ", port)
})