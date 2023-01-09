const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Full name is required"]
    },
    email: {
        type: String,
        required: false,
        validate: {
            //chars + an @ + chars
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    phoneNumber: {
        type: Number,
        required: false,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    },
    // role: {
    //     type: String,
    //     required: [true, "Role is required"]
    // },
}, { timestamps: true });

module.exports = mongoose.model("Location", LocationSchema);