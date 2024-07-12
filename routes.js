const express = require('express');
const router = express.Router();
const { getUserData, loginUser, trackUserActivity } = require('./controllers/userController');

// User routes
router.post('/login', loginUser);
router.get('/user-data', getUserData);
router.get('/user-activity', trackUserActivity);

module.exports = router;

