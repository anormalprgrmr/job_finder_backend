const mongoose = require('mongoose');

// Define Job Schema
const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Job title is required'],
        trim: true,
    },
    location: {
        type: String,
        required: [true, 'Location is required'],
    },
    salary: {
        type: Number,
        default: 0,
    },
    description: {
        type: String,
        // required: [true, 'Job description is required'],
    },
    requirements: {
        type: [String], // Array of strings
        default: [],
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true,
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
});

// Create Job Model
const Job = mongoose.model('Job', JobSchema);

module.exports = Job;
