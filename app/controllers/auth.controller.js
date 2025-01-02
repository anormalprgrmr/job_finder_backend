const { signup, verifyToken , login } = require("./../services/auth.service");
const companyService = require('../services/company.service');

const verifyUserToken = (req, res) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Token is required" });
  }

  const result = verifyToken(token);

  if (!result.valid) {
    return res
      .status(401)
      .json({ message: "Invalid or expired token", error: result.error });
  }

  res.status(200).json({ message: "Token is valid", user: result.decoded });
};

const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide name, email, and password" });
    }

    const result = await signup(name, email, password);

    res.status(201).json({
      message: "User registered successfully",
      token: result.token,
      user: result.user,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const signupCompany = async (req, res) => {
  try {
    const company = await companyService.createCompany(req.body);
    res.status(201).json({ success: true, data: company });
} catch (error) {
    res.status(400).json({ success: false, message: error.message });
}
  }

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide email and password" });
    }

    const result = await login(email, password);

    res
      .status(200)
      .json({
        message: "Login successful",
        token: result.token,
        user: result.user,
      });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = { signupUser, verifyUserToken, loginUser,signupCompany };
