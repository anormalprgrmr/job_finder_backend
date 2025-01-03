const Request = require('../models/request.model'); // Import the Request model
const Job = require('../models/job.model'); // Import the Job model
const Company = require('../models/company.model'); // Import the Company model

// Create a new request
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

// Get all requests for a specific job
const getonejobRequests = async () => {
    const requests = await Request.find().populate('job_id'); // Populate to get job and user details
    if (!requests || requests.length === 0) {
        return { status: 0, message: 'No requests found' };
    }
    return { status: 1, message: 'Requests fetched successfully', requests };
};

// Get all requests for a specific user
const getuserRequests = async (user_id) => {
    const requests = await Request.find({ user_id }).populate('job_id'); // Populate to get job details
    if (!requests || requests.length === 0) {
        return { status: 0, message: 'No requests found for this user' };
    }
    return { status: 1, message: 'User requests fetched successfully', requests };
};

// Get all requests for a specific company's jobs
const getcompanyRequests = async (company_id) => {
    // Find the company and get its job IDs
    const company = await Company.findById(company_id).populate('jobs'); // Assuming the company has a `jobs` array
    if (!company || !company.jobs || company.jobs.length === 0) {
        return { status: 0, message: 'No jobs found for this company' };
    }

    // Fetch all requests for the company's jobs
    const jobIds = company.jobs.map(job => job._id); // Get an array of job IDs
    const requests = await Request.find({ job_id: { $in: jobIds } }).populate('job_id').populate('user_id');

    if (!requests || requests.length === 0) {
        return { status: 0, message: 'No requests found for this company\'s jobs' };
    }

    return { status: 1, message: 'Company job requests fetched successfully', requests };
};

// Get all requests
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
    getuserRequests,
    getcompanyRequests,
    getAllRequests,
};
