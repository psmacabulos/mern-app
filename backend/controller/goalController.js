const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');
const User = require('../models/userModel');
/**
 * @desc    Get all the goals
 * @api     GET /api/goals
 */
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
});

/**
 * @desc    Get a specific goal
 * @api     GET /api/goals/:id
 */
const getGoal = asyncHandler(async (req, res) => {
  try {
    const goal = await Goal.findById(req.params.id);
    res.status(200).json(goal);
  } catch (err) {
    throw new Error('Id not found');
  }
});

/**
 * @desc    Set a goal
 * @api     POST /api/goals
 */
const setGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  res.status(200).json(goal);
});

/**
 * @desc    Editing one goal
 * @api     PUT /api/goals
 */
const updateGoals = asyncHandler(async (req, res) => {
  try {
    const goal = await Goal.findById(req.params.id);

    const user = await User.findById(req.user.id);

    // check for user
    if (!user) {
      res.status(401);
      throw new Error('User not found');
    }

    // Make user the logged in user matches the goal user

    if (goal.user.toString() !== user.id) {
      res.status(401);
      throw new Error('User not authorized');
    }
    const updatedGoal = await Goal.findOneAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedGoal);
  } catch (error) {
    throw new Error('Goal not found');
  }
});

/**
 * @desc    Delete a specific goal
 * @api     DELETE /api/goals
 */
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }
  const user = await User.findById(req.user.id);

  // check for user
  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Make user the logged in user matches the goal user

  if (goal.user.toString() !== user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  await goal.remove();

  res.status(200).json(req.params.id);
});

module.exports = { getGoal, getGoals, setGoals, updateGoals, deleteGoals };
