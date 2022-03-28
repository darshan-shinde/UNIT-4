const express = require("express")

const Users = require("../models/user.model")


const router = express.Router();



router.post("",async(req, res) => {
    try {
        const User = await Users.create(req.body)

        return res.status(201).send(User)
    } catch (error) {
        return res.status(500).send({ message:error.message})
    }
})

router.get("",async(req, res) => {
    try {
        let User = await Users.find({})

        return res.status(201).send(User)
    } catch (error) {
        return res.status(500).send({ message:error.message})
    }
})

module.exports = router;