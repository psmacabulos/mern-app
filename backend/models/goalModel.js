const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
  {
    // Each goal has its associated user
    user: {
      type: mongoose.Schema.Types.ObjectId, // gets the object id of the user in Model User
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Goal', goalSchema);
