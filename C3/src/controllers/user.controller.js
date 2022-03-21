const express = require("express")

const {body, validationResult} = require("express-validator")

const User = require("../models/user.model")

const Book = require("../models/user.model")

const router = express.Router();

router.post(
    '/',
    body("firstName")
    .trim()
    .not()
    .isEmpty()
    .bail()
    .withMessage("First Name cannot be empty")
    .isLength({min:3 , max:30}),
    body("lastName")
    .trim()
    .not()
    .isEmpty()
    .bail()
    .withMessage("First Name cannot be empty")
    .isLength({min:3 , max:30}),
    body("age")
    .not()
    .isEmpty()
    .isNumeric()
    .custom((val) => {
        if(val < 1 || val > 150){
          throw new Error("Incorrect age provided")
        }
        return true;
    }), 
    
    )

module.exports = router;