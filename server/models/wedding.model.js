const mongoose = require("mongoose");
const { Schema } = mongoose;

const VendorSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    email: {
        type: String,
        validate: {
            //chars + an @ + chars
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
}, {timestamps: true});

const WeddingSchema = Schema({
    title: String,

    event: {
        type: Schema.Types.ObjectId,
        ref: 'Event',
        required: [true, "Event document is required"]
    },

    registryLink: String,
    spouseOne: String,
    spouseTwo: String,
    cake: {
        type: VendorSchema
    },
    dj: {
        type: VendorSchema
    },
    decor: {
        type: [VendorSchema]
    },
    photographer: {
        type: VendorSchema
    },

}, { timestamps: true });

module.exports = mongoose.model("Wedding", WeddingSchema);