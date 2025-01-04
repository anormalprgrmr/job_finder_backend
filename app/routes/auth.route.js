const express = require('express');
const router = express.Router();
const { signupUser ,verifyUserToken,loginUser,signupCompany, loginCompany } = require('../controllers/auth.controller');

router.post('/signup/user', signupUser);
router.post('/signup/company', signupCompany)
router.get('/verify-token', verifyUserToken);
router.post('/login/user', loginUser);
router.post('/login/company', loginCompany);

module.exports = router;
