const mongoose = require("mongoose");


const foodOptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    description: {
        type: String,
        required: false
    },
    vegetarian: {
        type: Boolean,
        required: false,
    },
    vegan: {
        type: Boolean,
        required: false,
    },
    glutenFree: {
        type: Boolean,
        required: false,
    },
}, { timestamps: true });


module.exports = mongoose.model("FoodOption", foodOptionSchema);