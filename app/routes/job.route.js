const express = require('express');
const router = express.Router();
const { getAllJobs } = require('./../controllers/job.controller');


/**
 * @swagger
 * /api/jobs:
 *   get:   
 *     summary: Retrieve all jobs
 *     description: Get a list of all jobs.
 *     parameters:
 *       - name: username
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         in: formData
 *         required: true
 *         type: string
 *   post:
 *     summary: Create a new job
 *     description: Add a new job to the database.
 */

// Define Routes
router.get('/jobs', getAllJobs);



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