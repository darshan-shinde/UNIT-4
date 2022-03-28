
const express = require("express")

const Todos = require("../models/todo.model")

const router = express.Router();



router.post("",async(req, res) => {
    try {
        const todo = await Todos.create(req.body).lean().exec()

        return res.status(201).send(todo)
    } catch (error) {
        return res.status(500).send({ message:error.message})
    }
})

router.get("",async(req, res) => {
    try {
        const todo = await Todos.find({}).lean().exec()

        return res.status(201).send(todo)
    } catch (error) {
        return res.status(500).send({ message:error.message})
    }
})

router.get("/:id",async(req, res) => {
    try {
        const todo = await Todos.find(req.params.body).lean().exec()

        return res.status(201).send(todo)
    } catch (error) {
        return res.status(500).send({ message:error.message})
    }
})

router.patch("/:id",async(req, res) => {
    try {
        const todo = await Todos.find(req.params.id,req.body).lean().exec()

        return res.status(201).send(todo)
    } catch (error) {
        return res.status(500).send({ message:error.message})
    }
})

router.delete("/:id",async(req, res) => {
    try {
        const todo = await Todos.find(req.params.id,req.body).lean().exec()

        return res.status(201).send(todo)
    } catch (error) {
        return res.status(500).send({ message:error.message})
    }
})





module.exports = router