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

module.exports = {
    createCompany,
    getAllCompanies,
    getCompanyById,
    updateCompany,
    deleteCompany
};
