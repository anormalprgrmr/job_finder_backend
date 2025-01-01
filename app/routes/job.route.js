const express = require('express');
const router = express.Router();
const { 
    getAllJobsController, 
    createJobController, 
    getJobByIdController, 
    updateJobController, 
    deleteJobController, 
    searchJobsController, 
    getJobsWithPaginationController, 
    getJobsByPostedByController, 
    getJobsBySalaryRangeController, 
    getJobsByLocationController 
} = require('./../controllers/job.controller');
const authMiddleware = require('../middlewares/auth.middleware');

/**
 * @swagger
 * /api/jobs:
 *   get:
 *     summary: Retrieve all jobs
 *     description: Get a list of all jobs.
 *     responses:
 *       200:
 *         description: A list of jobs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   title:
 *                     type: string
 *                   company:
 *                     type: string
 *                   location:
 *                     type: string
 *                   salary:
 *                     type: number
 *                   requirements:
 *                     type: string
 *                   postedBy:
 *                     type: string
 *   post:
 *     summary: Create a new job
 *     description: Add a new job to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               company:
 *                 type: string
 *               location:
 *                 type: string
 *               salary:
 *                 type: number
 *               requirements:
 *                 type: string
 *               postedBy:
 *                 type: string
 *     responses:
 *       201:
 *         description: Job created successfully
 *       400:
 *         description: Invalid request data
 */

// Define Routes
router.get('/',authMiddleware, getAllJobsController);  // Get all jobs
router.post('/create', createJobController);  // Create a new job
router.get('/:id',authMiddleware, getJobByIdController);  // Get a job by ID
router.put('/:id', updateJobController);  // Update a job by ID
router.delete('/:id', deleteJobController);  // Delete a job by ID
router.get('/search',authMiddleware, searchJobsController);  // Search jobs by criteria
router.get('/pagination', authMiddleware,getJobsWithPaginationController);  // Paginate jobs
router.get('/postedBy/:postedBy',authMiddleware, getJobsByPostedByController);  // Get jobs by postedBy user
router.get('/salary',authMiddleware, getJobsBySalaryRangeController);  // Get jobs by salary range
router.get('/location/:location',authMiddleware, getJobsByLocationController);  // Get jobs by location

/**
 * @swagger
 * /job/hello:
 *   get:
 *     summary: Hello World
 *     description: Returns a simple 'hello world' message.
 *     responses:
 *       200:
 *         description: Successful response with 'hello world' message.
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: hello world
 */
router.get('/hello', (req, res) => {
    res.send('hello world');
});

module.exports = router;
