const Company = require("../models/company.model");
const bcrypt = require('bcryptjs');

const createCompany = async (name,email,password,description,location,website,industry,size) => {
//   const existingCompany = await Company.findOne({ email });
//   console.log(existingCompany);
  
//   if (existingCompany != null) {
//     throw new Error("Company already exists");
//   }
    console.log(name,email,password,description,location,website,industry,size);
    
  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  return await Company.create({name,email,password:hashedPassword,description,location,website,industry,size});
};

const getAllCompanies = async () => {
  return await Company.find();
};

const getCompanyById = async (id) => {
  return await Company.findById(id);
};

const updateCompany = async (id, data) => {
  return await Company.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

const deleteCompany = async (id) => {
  return await Company.findByIdAndDelete(id);
};

const addJob = async (companyId, jobId) => {
  return await Company.findByIdAndUpdate(
    companyId,
    { $addToSet: { jobs: jobId } }, // Using $addToSet to avoid duplicates
    { new: true, runValidators: true }
  );
};
module.exports = {
  createCompany,
  getAllCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
  addJob,
};
