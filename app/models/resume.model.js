const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
    },
    jobtitle: {
        type: String,
        required: [true, 'Job title is required'],
        trim: true,
    },
    summery: {
        type: String,
        required: [true, 'summery is required'],
        trim: true,
    },
    experience: {

        
    }
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
});

// Create User Model
const User = mongoose.model('User', UserSchema);

module.exports = User;
