const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("./../models/user.model");

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return { valid: true, decoded };
  } catch (error) {
    return { valid: false, error: error.message };
  }
};

const signup = async (name, email, password) => {
  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const newUser = await User.create({ name, email, password: hashedPassword });

  console.log("secret key is : ", process.env.JWT_SECRET);

  // Generate JWT token
  const token = jwt.sign(
    { userId: newUser._id, email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return {
    token,
    user: { id: newUser._id, name: newUser.name, email: newUser.email },
  };
};

const login = async (email, password) => {
  // Check if user exists
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("User does not exist");
  }

  // Compare passwords
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  // Generate JWT token
  const token = jwt.sign(
    { userId: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return { token, user: { id: user._id, name: user.name, email: user.email } };
};

module.exports = { signup, verifyToken, login };
