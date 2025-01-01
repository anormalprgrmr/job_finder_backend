const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
    job_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Request', RequestSchema);
