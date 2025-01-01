const Company = require('../models/company.model');

const createCompany = async (data) => {
    return await Company.create(data);
};

const getAllCompanies = async () => {
    return await Company.find();
};

const getCompanyById = async (id) => {
    return await Company.findById(id);
};

const updateCompany = async (id, data) => {
    return await Company.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

const deleteCompany = async (id) => {
    return await Company.findByIdAndDelete(id);
};

const addJob = async (companyId, jobId) => {
    return await Company.findByIdAndUpdate(
        companyId,
        { $addToSet: { jobs: jobId } }, // Using $addToSet to avoid duplicates
        { new: true, runValidators: true }
    );}
module.exports = {
    createCompany,
    getAllCompanies,
    getCompanyById,
    updateCompany,
    deleteCompany,
    addJob
};
