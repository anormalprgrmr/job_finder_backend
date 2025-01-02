const express = require('express');
const router = express.Router();
const { 
    getAllRequestsController, 
    createRequestController,
    getuserRequestsController,
    getcompanyRequestsController,
} = require('./../controllers/request.controller'); // Import the controllers
const { authenticate, verifyUserType } = require('../middlewares/auth.middleware');

/**
 * @swagger
 * /api/requests:
 *   get:
 *     summary: Retrieve all requests
 *     description: Get a list of all requests.
 *     responses:
 *       200:
 *         description: A list of requests
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   job_id:
 *                     type: string
 *                   user_id:
 *                     type: string
 *   post:
 *     summary: Create a new request
 *     description: Add a new request to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               job_id:
 *                 type: string
 *               user_id:
 *                 type: string
 *     responses:
 *       201:
 *         description: Request created successfully
 *       400:
 *         description: Invalid request data
 */

// Route to get all requests
router.get('/', authenticate, getAllRequestsController);

// Route to create a new request
router.post('/create', authenticate, verifyUserType(['user']), createRequestController);

/**
 * @swagger
 * /api/requests/user/{user_id}:
 *   get:
 *     summary: Get all requests made by a specific user
 *     description: Retrieve all requests associated with a specific user.
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         description: ID of the user to retrieve requests for
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of user requests
 *       404:
 *         description: No requests found
 */

// Route to get all requests made by a specific user
router.get('/user/:user_id', authenticate, verifyUserType(['user']), getuserRequestsController);

/**
 * @swagger
 * /api/requests/company/{company_id}:
 *   get:
 *     summary: Get all requests for jobs posted by a specific company
 *     description: Retrieve all requests associated with jobs posted by a specific company.
 *     parameters:
 *       - in: path
 *         name: company_id
 *         required: true
 *         description: ID of the company to retrieve requests for
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of company job requests
 *       404:
 *         description: No requests found
 */

// Route to get all requests for a company's jobs
router.get('/company/:company_id', authenticate, verifyUserType(['company']), getcompanyRequestsController);

/**
 * @swagger
 * /api/requests/hello:
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

// Test route
router.get('/hello', (req, res) => {
    res.send('hello world');
});

module.exports = router;
