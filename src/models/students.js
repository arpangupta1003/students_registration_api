const mongoose = require("mongoose");
const validator = require('validator');
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email");
            }
        }
    },
    phone: {
        type: Number,
        min: 10,
        // max: 10,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    birthday: {
        day: {
          type: Number,
          required: true
        },
        month: {
          type: Number,
          required: true,
        },
        year: {
          type: Number,
          required: true,
        }
    },
    percentage:{
        type: Number,
        required: true,
    }
})

// we will create a new collection
const Student = new mongoose.model("Students", studentSchema);
module.exports = Student;