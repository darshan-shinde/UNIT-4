const express = require('express')

const mongoose = require('mongoose')

const app = express()

app.use(express.json())



const connect = () =>{
    mongoose.connect("mongodb://127.0.0.1:27017/library")
} 

// books schema 

const books_schema = new mongoose.Schema(
    {
        "bookName": {type:"string",required:true},
        "body": {type:"string",required:false},
        "sectionId": {type:mongoose.Schema.Types.ObjectId, ref:"section" ,required: true}
    },
    {
        versionKey: false,
        timestamps: true, // createdAt, updatedAt
      }
)


// author schema 

const author_schema = new mongoose.Schema(
    {
        "bookName": {type:"string",required:true},
        "firstName":{type:"string",required: true },
        "lastName":{type:"string",required: true },
        "body": {type:"string",required:false},
        // "sectionId": {type:mongoose.Schema.Types.ObjectId,required: true}
    },
    {
        versionKey: false,
        timestamps: true, // createdAt, updatedAt
      }
)

// section schema 

const section_schema = new mongoose.Schema(
    {
        "bookName": {type:"string",required:true},
        // "first_name":{type:"string",required: true },
        // "last_name":{type:"string",required: true },
        "body": {type:"string",required:false},
        // "sectionId": {type:mongoose.Schema.Types.ObjectId,required: true}
    },
    {
        versionKey: false,
        timestamps: true, // createdAt, updatedAt
      }
)

// books model

const Books = mongoose.model("books",books_schema)

// author model

const Author = mongoose.model("author",author_schema)

// section model

const Section = mongoose.model("section",section_schema)


// books CRUDS

app.get('/books', async (req, res) => {
    try {
        
        const books = await Books
        .find({})
        .lean()
        .exec()
        return res.status(200).send({books: books})

    } catch (error) {
        return res.status(500).send({error: error})
    }
});


app.post('/books', async (req, res) => {
    try {
        
        const books = await Books.create(req.body)
        
        return res.status(200).send({books:books})

    } catch (error) {
        return res.status(500).send({error: error})
    }
});

// author CRUDS

app.get('/author', async (req, res) => {
    try {
        const author = await Author
        .find()
        // .populate({
        //     path:"sectionId"
        // })
        .lean()
        .exec()
        return res.status(200).send({author:author})

    } catch (error) {
        return res.status(500).send({error: error})
    }
});



app.post('/author', async (req, res) => {
    try {
        
        const author = await Author.create(req.body)
        
        return res.status(200).send({author:author})

    } catch (error) {
        return res.status(500).send({error: error})
    }
});


// section CRUDS

app.get('/section', async (req, res) => {
    try {
        const section = await Section
        .find()
        .lean()
        .exec()
        return res.status(200).send({section:section})

    } catch (error) {
        return res.status(500).send({error: error})
    }
});

app.get('/books/:id', async (req, res) => {
    try {
        const section = await Section
        .find()
        .lean()
        .exec()
        return res.status(200).send({section:section})

    } catch (error) {
        return res.status(500).send({error: error})
    }
});



app.post('/section', async (req, res) => {
    try {
        
        const section = await Section.create(req.body)
        
        return res.status(200).send({section:section})

    } catch (error) {
        return res.status(500).send({error: error})
    }
});





app.listen(5000,async() => {
    try {
       await connect() 
    } catch (error) {
       console.log(error) 
    }
    console.log("here")
});

