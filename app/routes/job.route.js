const express = require('express');
const router = express.Router();
const { getAllJobs } = require('./../controllers/job.controller');

// Define Routes
router.get('/jobs', getAllJobs);

module.exports = router;