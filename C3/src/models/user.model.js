const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName : {type : String, required : true},
    lastName : {type : String, required : false},
    age : {type : Number, required : true },
    email : {type : String, required : true, unique: true },
    profileImages : {type : Array, required : true},
    book_id : {type :mongoose.Schema.Types.ObjectId, required : true,ref:"Book"}
},
{
    timestamps: true,
})

const BookSchema = new mongoose.Schema({
   likes:{type :Number, required : true,default:"0"},
   coverImage: {type : String, required : true},
   content: {type : String, required : true},
   Publication_id : {type :mongoose.Schema.Types.ObjectId, required : true,ref:"Publication"}
},
{
    timestamps: true,
})


const publicationSchema = new mongoose.Schema({
    name: {type : String, required : true},
    book_id : {type :mongoose.Schema.Types.ObjectId, required : true,ref:"Book"}
 },
 {
     timestamps: true,
 })

 const commentSchema = new mongoose.Schema({
    body: {type : String, required : true},
    user_id : {type :mongoose.Schema.Types.ObjectId, required : true,ref:"User"}
 },
 {
     timestamps: true,
 })

 const User = mongoose.model("user", userSchema)

 const Book = mongoose.model("book",BookSchema)

 const Publication = mongoose.model("publication",publicationSchema)

 const Comment = mongoose.model("comment", commentSchema)

 module.exports = {User,Book,Publication,Comment}



