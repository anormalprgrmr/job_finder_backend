const express = require('express');
const router = express.Router();
const { 
    getAllRequestsController, 
    createRequestController, 
} = require('./../controllers/request.controller');
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
router.get('/',authMiddleware, getAllRequestsController);  // Get all jobs
router.post('/create',authMiddleware, createRequestController);  // Create a new job

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
