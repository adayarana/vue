const { model, Schema } = require('mongoose');

const movieSchema = Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: Number,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  favourite: {
    type: Boolean
  }
}, {
  timestamps: true
}).method('toJSON', function toJson() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model('Movies', movieSchema);
