const express = require('express');
const {
    getAllCompanies,
    getCompanyById,
    updateCompany,
    deleteCompany
} = require('../controllers/company.controller');
const { authenticate, verifyUserType } = require('../middlewares/auth.middleware');
const { getJobsByPostedByController } = require('../controllers/job.controller');

const router = express.Router();

// router.post('/',createCompany);       // Create a company
router.get('/',authenticate, getAllCompanies);      // Get all companies
router.get('/myjobs',authenticate,verifyUserType(['company']), getJobsByPostedByController);  // Get jobs by postedBy user

router.get('/:id',authenticate, getCompanyById);    // Get a single company
router.put('/:id',authenticate, verifyUserType(['company']), updateCompany);     // Update a company
router.delete('/:id', verifyUserType(['company']), deleteCompany);  // Delete a company

module.exports = router;
