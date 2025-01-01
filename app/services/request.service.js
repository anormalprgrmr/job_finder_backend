const Request = require('../models/request.model'); // Import the Request model

const createRequest = async (body) => {
    const newRequest = await Request.create({
        job_id: body.job_id,
        user_id: body.user_id,
    });

    if (!newRequest) {
        return { status: 0, message: 'Request creation failed' };
    }

    return { status: 1, message: 'Request created successfully', request: newRequest };
};

const getAllRequests = async () => {
    const requests = await Request.find().populate('job_id').populate('user_id'); // Populate to get job and user details
    if (!requests || requests.length === 0) {
        return { status: 0, message: 'No requests found' };
    }
    return { status: 1, message: 'Requests fetched successfully', requests };
};

// Additional functions for handling requests can be added here

module.exports = {
    createRequest,
    getAllRequests,
};
