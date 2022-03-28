const express = require("express")

const connect = require("./configs/db")

const userController = require("./controllers/user.controller")

const todoController = require("./controllers/todo.controller")

const {register,login, generateToken} = require("./controllers/auth.controller")

const app = express()

app.use(express.json())

app.use("/user", userController)

app.use("/todo", todoController)

app.post("/register",register)

app.post("/login",login)

app.get("/todo", todoController)

app.post("/todo", todoController)

app.post("/todo/:id", todoController)

app.patch("/todo/:id", todoController)

app.delete("/todo/:id", todoController)










app.listen(5000, async () => {
    try {
        await connect()
        console.log("Connected on port 5000")
    } catch (error) {
        console.log(error.message)
    }
})