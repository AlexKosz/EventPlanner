const mongoose = require("mongoose");


const RsvpSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Full name is required"]
    },
    code: {
        type: String,
        required: [true, "Code is required"]
    },
    quantity: {
        type: Number,
        required: false
    },
    responded: {
        type: Boolean,
        default: false
    },

    // Array of IDs
    // Length must equal quantity or 1
    foodChoices: {
        type: Array,
        required: false
    },

    // TODO Connect to user if exists in app
    // userID: {
    //     type: String,
    //     required: [true, "Full name is required"]
    // },

}, { timestamps: true });

module.exports = mongoose.model("Rsvp", RsvpSchema);