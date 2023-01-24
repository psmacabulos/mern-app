const express = require('express');
const router = express.Router();
const {
  getGoal,
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require('../controller/goalController');

// setup the CRUD routes

router.route('/').get(getGoals).post(setGoals);

router.route('/:id').get(getGoal).put(updateGoals).delete(deleteGoals);

module.exports = router;
