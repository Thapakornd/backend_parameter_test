const express = require('express')
const app = express()
const port = 8080

//Define Variables
var id = 65140322;
var status = "Single";

app.set('view engine','ejs')

//Add Variables
var user_list = [
    { name: "Nester", address: "BKK", birth_year: 2003},
    { name: "Annie", address: "PKT", birth_year: 1999},
    { name: "Winner", address: "CNX", birth_year: 2022}
];

app.get("/Kuy", (req,res) => {
    res.send("Hello NodeJS")
})

app.get("/name",(req,res) => {
    res.send("Aj.Nest the Series")
})

//New Front-end EJS
app.get("/",(req,res) => {
    res.render('index',{userid : id, status : status, obj_user_list : user_list})
})

//Open Server
app.listen(port,() => {
    console.log("Server is Listening on port: ", port)
})