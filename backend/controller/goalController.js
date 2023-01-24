const asyncHandler = require('express-async-handler');
/**
 * @desc    Get all the goals
 * @api     GET /api/goals
 */
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: 'Get Goals' });
});

/**
 * @desc    Get a specific goal
 * @api     GET /api/goals/:id
 */
const getGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `Goal ${req.params.id} is fetched` });
});

/**
 * @desc    Set a goal
 * @api     POST /api/goals
 */
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }
  res.status(200).json({ msg: 'Setting Goals' });
});

/**
 * @desc    Editing one goal
 * @api     PUT /api/goals
 */
const updateGoals = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ msg: `Updating goal with the id of ${req.params.id}` });
});

/**
 * @desc    Delete a specific goal
 * @api     DELETE /api/goals
 */
const deleteGoals = asyncHandler(async (req, res) => {
  res
    .status(200)
    .json({ msg: `Deleting goal with the id of ${req.params.id}` });
});

module.exports = { getGoal, getGoals, setGoals, updateGoals, deleteGoals };
