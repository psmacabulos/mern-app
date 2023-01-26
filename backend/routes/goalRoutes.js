const express = require('express');
const router = express.Router();
const {
  getGoal,
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require('../controller/goalController');

const protect = require('../middleware/authMiddleware');
// setup the CRUD routes

router.route('/').get(protect, getGoals).post(protect, setGoals);

router
  .route('/:id')
  .get(protect, getGoal)
  .put(protect, updateGoals)
  .delete(protect, deleteGoals);

module.exports = router;
