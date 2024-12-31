const express = require('express');
const {
    createCompany,
    getAllCompanies,
    getCompanyById,
    updateCompany,
    deleteCompany
} = require('../controllers/company.controller');

const router = express.Router();

router.post('/', createCompany);       // Create a company
router.get('/', getAllCompanies);      // Get all companies
router.get('/:id', getCompanyById);    // Get a single company
router.put('/:id', updateCompany);     // Update a company
router.delete('/:id', deleteCompany);  // Delete a company

module.exports = router;
