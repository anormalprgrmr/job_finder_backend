const {
    createRequest,
    getuserRequests,
    getcompanyRequests,
    getAllRequests,
} = require('./../services/request.service'); // Import the request service

// Controller to create a new request
const createRequestController = async (req, res, next) => {
    try {
        const body = req.body;
        const response = await createRequest(body);  // Call the service function
        if (response.status === 0) {
            return res.status(400).json(response);
        }
        return res.status(201).json(response);
    } catch (err) {
        next(err);
    }
};

// Controller to get all requests
const getAllRequestsController = async (req, res, next) => {
    try {
        const response = await getAllRequests();  // Call the service function
        if (response.status === 0) {
            return res.status(404).json(response);
        }
        return res.status(200).json(response);
    } catch (err) {
        next(err);
    }
};

// Controller to get all requests for a specific user
const getuserRequestsController = async (req, res, next) => {
    try {
        const { user_id } = req.params; // Get the user_id from the request parameters
        const response = await getuserRequests(user_id); // Call the service function
        if (response.status === 0) {
            return res.status(404).json(response);
        }
        return res.status(200).json(response);
    } catch (err) {
        next(err);
    }
};

// Controller to get all requests for a specific company's jobs
const getcompanyRequestsController = async (req, res, next) => {
    try {
        const { company_id } = req.params; // Get the company_id from the request parameters
        const response = await getcompanyRequests(company_id); // Call the service function
        if (response.status === 0) {
            return res.status(404).json(response);
        }
        return res.status(200).json(response);
    } catch (err) {
        next(err);
    }
};

// Export all the request controllers
module.exports = {
    createRequestController,
    getAllRequestsController,
    getuserRequestsController,
    getcompanyRequestsController,
};
