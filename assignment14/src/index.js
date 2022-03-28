const express = require('express')

const connect = require('./configs/db')

const productController = require("./controllers/product.controller")

// const productSchema = require('./models/productSchema')

const app = express()

app.use(express.json())

app.use("/product", productController)



app.listen(5000, async () => {
    try{
        await connect();
        console.log("listening on port 5000")
    }
    catch(err){
        console.log(err.message);
    }
});

