const Job = require("../models/job.model");
const companyService = require('../services/company.service');
const mongoose = require('mongoose');

const createJob = async (compId,title,salary,location) => {
    console.log('data is : ',compId,title,salary,location);
    
    const newJob = await Job.create({
        title,
        location,
        salary,
        postedBy: compId
    });
    

    if (!newJob) {
        return { status: 0, message: 'Job creation failed' };
    }
    console.log(newJob._id);

    
    const company = await companyService.addJob(compId,newJob._id)

    if(!company){
        return { status: 0, message: 'job addition failed' };
    }
    return { status: 1, message: 'Job created and added successfully' };

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

const getJobsByPostedBy = async (compId)=>{
    const objectIdToCompare =new mongoose.Types.ObjectId(compId);
    console.log(compId);
    
    return await Job.find({postedBy:new mongoose.Types.ObjectId(compId)})

}

module.exports = {
    createJob,
    getAllJobs,
    getJobById,
    updateJob,
    deleteJob,
    getJobsByPostedBy
};
