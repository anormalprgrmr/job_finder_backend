const companyService = require('../services/company.service');

const createCompany = async (req, res) => {
    try {
        const company = await companyService.createCompany(req.body);
        res.status(201).json({ success: true, data: company });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getAllCompanies = async (req, res) => {
    try {
        const companies = await companyService.getAllCompanies();
        res.status(200).json({ success: true, data: companies });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const getCompanyById = async (req, res) => {
    try {
        const company = await companyService.getCompanyById(req.params.id);
        if (!company) {
            return res.status(404).json({ success: false, message: 'Company not found' });
        }
        res.status(200).json({ success: true, data: company });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const updateCompany = async (req, res) => {
    try {
        const company = await companyService.updateCompany(req.params.id, req.body);
        if (!company) {
            return res.status(404).json({ success: false, message: 'Company not found' });
        }
        res.status(200).json({ success: true, data: company });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const deleteCompany = async (req, res) => {
    try {
        const company = await companyService.deleteCompany(req.params.id);
        if (!company) {
            return res.status(404).json({ success: false, message: 'Company not found' });
        }
        res.status(200).json({ success: true, message: 'Company deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    createCompany,
    getAllCompanies,
    getCompanyById,
    updateCompany,
    deleteCompany
};
