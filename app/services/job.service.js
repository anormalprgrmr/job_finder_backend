const Job = require("../models/job.model");

const createJob = async (body) => {
    const newJob = await Job.create({
        title: body.title,
        company: body.company,
        location: body.location,
        salary: body.salary,
        requirements: body.requirements,
        postedBy: "madaret"
    });

    if (!newJob) {
        return { status: 0, message: 'Job creation failed' };
    }

    return { status: 1, message: 'Job created successfully' };
}

const getAllJobs = async () => {
    const jobs = await Job.find();
    if (!jobs) {
        return { status: 0, message: 'No jobs found' };
    }
    return { status: 1, message: 'Jobs fetched successfully', jobs };
}

const getJobById = async (id) => {
    const job = await Job.findById(id);
    if (!job) {
        return { status: 0, message: 'Job not found' };
    }
    return { status: 1, message: 'Job found', job };
}

const updateJob = async (id, body) => {
    const updatedJob = await Job.findByIdAndUpdate(id, body, { new: true });
    if (!updatedJob) {
        return { status: 0, message: 'Job update failed' };
    }
    return { status: 1, message: 'Job updated successfully', job: updatedJob };
}

const deleteJob = async (id) => {
    const deletedJob = await Job.findByIdAndDelete(id);
    if (!deletedJob) {
        return { status: 0, message: 'Job deletion failed' };
    }
    return { status: 1, message: 'Job deleted successfully' };
}

module.exports = {
    createJob,
    getAllJobs,
    getJobById,
    updateJob,
    deleteJob,
};