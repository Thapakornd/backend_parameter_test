const express = require('express')
const app = express()
const port = 8080

//Define Variables
var id = 65140322;
var status = "Single";

app.set('view engine','ejs')

//Connect public folder
app.use(express.static('public'))

//Connect index2.ejs
app.get("/index2",(req,res) => {
    res.render('index2')
})

//Open Server
app.listen(port,() => {
    console.log("Server is Listening on port: ", port)
})