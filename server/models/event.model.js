const mongoose = require("mongoose");
const { Schema } = mongoose;

const foodOptionSchema = Schema({
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
});

const EventSchema = Schema({
    title: {
        type: String,
        required: [true, "title is required"]
    },
    invitationOnly: {
        type: Boolean,
        default: true,
    },

    date: {
        type: Date,
        min: Date.now,
        required: [true, "Date is required"]
    },
    rsvpBy: {
        type: Date,
    },

    // Minutes after midnight
    startTime: {
        type: Number,
        required: [true, "Start time is required"]
    },
    // Minutes after midnight
    endTime: {
        type: Number,
    },

    ageReq: {
        type: Number,
    },

    //TODO validate by making sure it is one from a list
    dressCode: {
        type: String,
    },

    organizers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],

    venue: {
        type: Schema.Types.ObjectId,
        ref: 'Location',
        required: [true, "Venue is required"]
    },

    guests: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Rsvp'
        }
    ],

    foodOptions: [foodOptionSchema],

}, { timestamps: true });

module.exports = mongoose.model("Event", EventSchema);