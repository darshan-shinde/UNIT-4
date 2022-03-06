const express = require('express')
// console.log(express)

const app = express()
// console.log(app)

app.get("/abc",function(req, res){
    console.log("hello")

    res.send("HELLO")
})
app.get("/books",function(req, res){
    res.json({
        "title": "Flowers",
        "authors": [
            "Vijaya Khisty Bodach"
           ],
           "title2": "The Girl who Played with Fire",
        "authors2": [
            "Stieg Larsson"
           ],
           
        "title3": "The Sign of Four",
        "authors3": [
            "Sir Arthur Conan Doyle"
           ],
    },
    )
    // console.log(res)
})


app.listen(3000,() =>{
    console.log("listening")
})