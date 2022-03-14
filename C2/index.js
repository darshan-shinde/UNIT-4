const express = require('express')

const mongoose = require('mongoose')

const app = express()

app.use(express.json())

const connect = () =>{
    mongoose.connect("mongodb://127.0.0.1:27017/Bank")
}

// user schema 

const userSchema = new mongoose.Schema(
    {
        firstName:{type: 'string', required:true},
        middleName:{type: 'string', required:false},
        lastName:{type: 'string', required: true},
        age:{type: 'number', required: true},
        email:{type: 'string', required:true},
        address:{type: 'string', required: true},
        gender:{type: 'string', required: true, default: 'female'},
        type:{type: 'string', required: true, default: 'customer'},
        // masterId:{type:mongoose.Schema.Types.ObjectID,required:true}
        
    },
    {
      versionKey:false,
      timestamps: true,
    }
)

// branch schema

const branchSchema = new mongoose.Schema(
    {
        Name:{type: 'string', required:true},
        IFSC:{type: 'string', required:false},
        MICR:{type: 'number', required: true},
        address:{type: 'string', required: true},
    },
    {
      versionKey:false,
      timestamps: true,
    }
)

// master account schematype

const masterSchema = new mongoose.Schema(
    {
        balance:{type: 'number', required:true},
        userId:{type:mongoose.Schema.Types.ObjectID,required:true},
        branchId:{type:mongoose.Schema.Types.ObjectID,required:true}
    },
    {
      versionKey:false,
      timestamps: true,
    }
)

// saving schema

const savingSchema = new mongoose.Schema(
    {
        accountNumber:{type: 'number', required:true, unique: true},
        balance:{type: 'number', required:true},
        interestRate:{type: 'string', required:true},
        masterId:{type:mongoose.Schema.Types.ObjectID,required:true}
        
        
    },
    {
      versionKey:false,
      timestamps: true,
    }
)

//fixed schema

const fixedSchema = new mongoose.Schema(
    {
        accountNumber:{type: 'number', required:true, unique: true},
        balance:{type: 'number', required:true},
        interestRate:{type: 'string', required:true},
        startDate:{type: "string", required: true},
        maturityDate:{type: "string", required: true},
        masterId:{type:mongoose.Schema.Types.ObjectID,required:true}
    },
    {
      versionKey:false,
      timestamps: true,
    }
)



// user model 

const User = mongoose.model("user",userSchema)

// branch model 

const Branch = mongoose.model("branch",branchSchema)

// master acc model 

const Master = mongoose.model("master",masterSchema)

// saving acc model 

const Savings = mongoose.model("savings",savingSchema)

// fixed acc model 

const Fixed = mongoose.model("fixed",fixedSchema)

 
// user CRUDS

app.get('/user', async (req, res) => {
    try {
        const user = await User.find({}).lean().exec()
        return res.status(200).send({user : user})
    } catch (error) {
        return res.status(500).send({error : error})
    }
})

// app.post('/master', async (req, res) => {
//     try {
//         const user = await Master.create(req.body)
//         return res.status(200).send({user : user})
//     } catch (error) {
        
//     }
// })

app.post('/user', async (req, res) => {
    try {
        const user = await User.create(req.body)
        return res.status(200).send(user)
    } catch (error) {
        return res.status(500).send({error : error})
    }
})

app.listen(5000, async() => {
  try {
      await connect()
  } catch (error) {
      console.log(error)
  }
  console.log("connected")
})