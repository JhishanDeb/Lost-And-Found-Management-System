// routes/userRoutes.js
const express = require('express');
const { registerUser, loginUser, logoutUser, getUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// User Registration
router.post('/register', registerUser);

// User Login
router.post('/login', loginUser);

// User Logout
router.post('/logout', protect, logoutUser);

// Get User Profile
router.get('/profile', protect, getUserProfile);

module.exports = router;