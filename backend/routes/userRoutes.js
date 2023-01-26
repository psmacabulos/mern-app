const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');

const {
  registerUser,
  getMe,
  loginUser,
} = require('../controller/userController');

router.get('/me', protect, getMe);
router.post('/', registerUser);
router.post('/login', loginUser);

module.exports = router;
