const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
    guestName: String,
    foodChoice: String
}, {timestamps: true});

const RsvpSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Full name is required"]
    },
    code: {
        type: String,
        required: [true, "Code is required"]
    },
    approvedQuantity: {
        type: Number,
        required: false
    },
    responded: {
        type: Boolean,
        default: false
    },

    // Length must equal approvedQuantity or 1
    foodChoices: {
        type: [FoodSchema],
        required: false
    },

    // TODO Connect to user if exists in app
    // userID: {
    //     type: String,
    //     required: [true, "Full name is required"]
    // },

}, { timestamps: true });

module.exports = mongoose.model("Rsvp", RsvpSchema);