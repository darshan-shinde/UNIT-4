const express = require("express")

const Products = require('../models/product.models')

const router = express.Router();

router.post("",async (req,res) => {
    try {
        const Product = await Products.create(req.body)

        return res.status(201).send(Product)

    } catch (error) {

        return res.status(500).send({message: error.message})
    }
})

router.get("",async (req,res) => {
    try {
        const Product = await Products.find(req.body).lean().exec();

        return res.status(201).send(Product)

    } catch (error) {
        
        return res.status(500).send({message: error.message})
    }
})

router.get("/:id",async (req,res) => {
    try {
        const Product = await Products.findById(req.params.id).lean().exec();

        return res.status(201).send(Product)

    } catch (error) {
        
        return res.status(500).send({message: error.message})
    }
})

router.patch("/:id",async (req,res) => {
    try {
        const Product = await Products.findByIdAndUpdate(req.params.id,req.body,{new: true}).lean().exec();

        return res.status(201).send(Product)

    } catch (error) {
        
        return res.status(500).send({message: error.message})
    }
})

router.delete("/:id",async (req,res) => {
    try {
        const Product = await Products.findByIdAndDelete(req.params.id,req.body).lean().exec();

        return res.status(201).send(Product)

    } catch (error) {
        
        return res.status(500).send({message: error.message})
    }
})

module.exports = router;