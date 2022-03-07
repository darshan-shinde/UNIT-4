const express = require('express');

const app = express();

app.use(logger)

app.listen(3000, () =>{
    console.log('listening on port 3000')
})

app.get("/books",logger,(req, res) =>{
    return res.send({
        route: "/books"
    })
})

app.get("/libraries",logger,checkPermission("librarian"), (req, res) =>{
    return res.send({
        route: "/libraries", permission: true
    })
})

app.get("/authors",logger,checkPermission("author"),(req, res) =>{
    return res.send({
        route: "authors", permission: true
    })
})

function logger(req, res, next) {
    console.log(req.path);
    next();
}

function checkPermission(user) {
    return function log(req, res, next){

        if(req.path === "/libraries"  && user === "librarian"  ){
             permission: true
        }
        else if(req.path === "/authors" && user === "author"){
                permission: true
        }
        next();
    }
    
   
}





