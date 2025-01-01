const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    status: {
        type: String,
        required: [true, 'Company name is required'],
        trim: true
    },
    name: {
        type: String,
        required: [true, 'Company name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: 6,
    },
    description: {
        type: String,
        trim: true
    },
    location: {
        type: String,
        trim: true
    },
    website: {
        type: String,
        trim: true
    },
    industry: {
        type: String,
        required: [true, 'Industry is required'],
        trim: true
    },
    size: {
        type: String,
        enum: ['Small', 'Medium', 'Large'],
        default: 'Small'
    },
    jobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Company', CompanySchema);
