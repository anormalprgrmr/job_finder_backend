const {
    createRequest,
    getAllRequests,
} = require('./../services/request.service'); // Import the new request service

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
}

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
}

// Export the request controllers
module.exports = {
    createRequestController,
    getAllRequestsController,
};
