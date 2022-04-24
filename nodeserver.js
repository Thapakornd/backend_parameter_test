const express = require('express')
const app = express()
const port = 8080

//Connect EJS
app.set('view engine','ejs')

//Add Variables
var logofont1 = "LOGO";
var logofont2 = "YOUR NAME";

//Content-1
var content_1 = [
    {img1 : "image/test1.jpg",
    content_1 : "Insert your introduce website"    
}
]

//Content-2
var content_2 = [
    {img2 : "image/test2.jpg",
    content_2_1 : "Header 2-1",
    content_2_1_1 : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised",
    content_2_2 : "Header 2-2",
    content_2_2_1 : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised"
}
]

//Content-3
var content_3 = [
    {content_3_head : "Header 3",
    content_3_1 : "Lorem Ipsum is simply dummy text ",
    img3_1 : "image/test3.png",
    img3_2 : "image/test3.png",
    img3_3 : "image/test3.png",
}
]

//Connect public folder
app.use(express.static('public'))

//Connect index2.ejs
app.get("/index2",(req,res) => {
    res.render('index2',{logofont1 : logofont1,
        logofont2 : logofont2,
        obj_con1 : content_1,
        obj_con2 : content_2,
        obj_con3 : content_3
        })
})

//Open Server
app.listen(port,() => {
    console.log("Server is Listening on port: ", port)
})