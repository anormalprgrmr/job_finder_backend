const { 
    createJob, 
    getAllJobs, 
    getJobById, 
    updateJob, 
    deleteJob, 
    searchJobs, 
    getJobsWithPagination,
    getJobsByPostedBy,
    getJobsBySalaryRange,
    getJobsByLocation
} = require('./../services/job.service');

const createJobController = async (req, res, next) => {
    try {
        const body = req.body;
        const response = await createJob(body);  // Call the service function
        if (response.status === 0) {
            return res.status(400).json(response);
        }
        return res.status(201).json(response);
    } catch (err) {
        next(err);
    }
}

const getAllJobsController = async (req, res, next) => {
    try {
        const jobs = await getAllJobs();  // Call the service function
        if (jobs.status === 0) {
            return res.status(404).json(jobs);
        }
        return res.status(200).json(jobs);
    } catch (err) {
        next(err);
    }
}

const getJobByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await getJobById(id);  // Call the service function
        if (response.status === 0) {
            return res.status(404).json(response);
        }
        return res.status(200).json(response);
    } catch (err) {
        next(err);
    }
}

const updateJobController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await updateJob(id, body);  // Call the service function
        if (response.status === 0) {
            return res.status(400).json(response);
        }
        return res.status(200).json(response);
    } catch (err) {
        next(err);
    }
}

const deleteJobController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = await deleteJob(id);  // Call the service function
        if (response.status === 0) {
            return res.status(400).json(response);
        }
        return res.status(200).json(response);
    } catch (err) {
        next(err);
    }
}

// Function to search jobs by criteria (like location, salary range)
const searchJobsController = async (req, res, next) => {
    try {
        const criteria = req.query;  // Get search criteria from query parameters
        const response = await searchJobs(criteria);  // Call the service function
        if (response.status === 0) {
            return res.status(404).json(response);
        }
        return res.status(200).json(response);
    } catch (err) {
        next(err);
    }
}

// Paginate jobs with page and limit
const getJobsWithPaginationController = async (req, res, next) => {
    try {
        const { page, limit } = req.query;  // Get pagination info from query parameters
        const response = await getJobsWithPagination(page, limit);  // Call the service function
        if (response.status === 0) {
            return res.status(404).json(response);
        }
        return res.status(200).json(response);
    } catch (err) {
        next(err);
    }
}

// Get jobs posted by a specific user
const getJobsByPostedByController = async (req, res, next) => {
    try {
        const { postedBy } = req.params;  // Get the 'postedBy' user from URL params
        const response = await getJobsByPostedBy(postedBy);  // Call the service function
        if (response.status === 0) {
            return res.status(404).json(response);
        }
        return res.status(200).json(response);
    } catch (err) {
        next(err);
    }
}

// Get jobs within a specific salary range
const getJobsBySalaryRangeController = async (req, res, next) => {
    try {
        const { minSalary, maxSalary } = req.query;  // Get salary range from query parameters
        const response = await getJobsBySalaryRange(minSalary, maxSalary);  // Call the service function
        if (response.status === 0) {
            return res.status(404).json(response);
        }
        return res.status(200).json(response);
    } catch (err) {
        next(err);
    }
}

// Get jobs by location
const getJobsByLocationController = async (req, res, next) => {
    try {
        const { location } = req.params;  // Get location from URL params
        const response = await getJobsByLocation(location);  // Call the service function
        if (response.status === 0) {
            return res.status(404).json(response);
        }
        return res.status(200).json(response);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    createJobController,
    getAllJobsController,
    getJobByIdController,
    updateJobController,
    deleteJobController,
    searchJobsController,
    getJobsWithPaginationController,
    getJobsByPostedByController,
    getJobsBySalaryRangeController,
    getJobsByLocationController
};
