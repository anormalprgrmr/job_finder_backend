const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Add decoded token data to the request
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

const verifyUserType = (types) => {
  return (req, res, next) => {
    if (!types.includes(req.user.type)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  };
};
module.exports= {verifyUserType,authenticate}
