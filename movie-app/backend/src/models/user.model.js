const { model, Schema } = require('mongoose');
const Movies = require('./movie.model');

const userSchema = Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  movies: [{
    type: Array,
    ref: [Movies]
  }]
});

userSchema.methods.isValidPassword = function isValidPassword(password) {
  return password === this.password;
};

module.exports = model('User', userSchema);
