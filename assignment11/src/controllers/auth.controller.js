
const User = require('../models/user.model')

const register = async (res,req) => {
    try {

        const user = await User.find({email:req.body.email})

        if(user){
            return res.status(400).send({message : "email already exists"})
        }

        return res.status(200).send("Register")
        
    } catch (error) {
        return res.status(400).send({errors})
    }
}

const login = async  (req,res) => {
    try {
        return res.status(200).send("Register")
    } catch (error) {
        return res.status(400).send({errors})
    }
}

module.exports = {register,login}