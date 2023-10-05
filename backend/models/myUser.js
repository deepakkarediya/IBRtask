const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo: String,
  dob: {
    type: Date,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  interests: [String],
});

module.exports = mongoose.model('myUser', userSchema);
