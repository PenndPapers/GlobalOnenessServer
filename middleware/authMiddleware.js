// middleware/authMiddleware.js
 
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/env'); // Assuming you have a separate file for environment variables
 
const authMiddleware = (req, res, next) => {
    // Get token from request headers or query parameters or cookies
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1]; // Assuming token is sent in the Authorization header
 
    if (!token) {
        return res.status(401).json({ success: false, message: 'Authorization token is missing' });
    }
 
    try {
        // Verify token
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded.user; // Attach user data to request object
        next(); // Proceed to next middleware
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Invalid token' });
    }
};
 
module.exports = authMiddleware;