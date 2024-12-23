const express = require('express');
const router = express.Router();
const { signupUser ,verifyUserToken,loginUser } = require('../controllers/auth.controller');

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: Register a new user
 *     description: Creates a new user account and returns a JWT token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       201:
 *         description: User registered successfully.
 *       400:
 *         description: User already exists or invalid data.
 */

router.post('/signup', signupUser);

/**
 * @swagger
 * /api/auth/verify-token:
 *   get:
 *     summary: Verify JWT token
 *     description: Validates the JWT token and returns the decoded payload if valid.
 *     parameters:
 *       - name: Authorization
 *         in: header
 *         required: true
 *         description: Bearer token for verification
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Token is valid.
 *       401:
 *         description: Token is invalid or expired.
 */
router.get('/verify-token', verifyUserToken);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login User
 *     description: Authenticate user and return a JWT token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Login successful.
 *       401:
 *         description: Invalid credentials.
 */
router.post('/login', loginUser);

module.exports = router;
