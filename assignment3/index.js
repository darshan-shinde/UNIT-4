const express = require('express')

const app = express()

app.get("/books",allbooks,(req, res) => {
    return res.send("all books")
})

app.listen(3000,() => {
    console.log("Listening")
})

function allbooks(req, res, next) {
   
    console.log("fetching all books")
    next();

}

app.get("/books/:name",singlebooks,(req, res) => {
    return res.send({bookName : req.name})
})

function singlebooks(req, res, next) {
    console.log("books")
    req.name = "HarryPotter"
    // req.name = req.params.name
    console.log(req.name)
    next();
}