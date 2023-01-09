const mongoose = require("mongoose");


const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"]
    },
    invitationOnly: {
        type: Boolean,
        default: true,
    },

    //TODO validate date after now
    date: {
        type: Date,
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

    //TODO Link to at least one User
    organizers: {
        type: Array,
        required: [true, "Organizers are required"]
    },

    //TODO Link to ONE location
    venue: {
        type: mongoose.ObjectId,
        required: [true, "Venue is required"]
    },

    //TODO Link to at least one RSVP model
    guests: {
        type: Array,
    },

    //TODO Link to at least one food option model
    foodOptions: {
        type: Array,
    },

}, { timestamps: true });

module.exports = mongoose.model("Event", EventSchema);