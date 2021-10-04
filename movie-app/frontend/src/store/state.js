export default {
  movies: {
    type: Array,
    default: []
  },
  movie: {
    type: Object,
    default: {
      title: '',
      year: '',
      score: '',
      favourite: false
    }
  },
  shows: {
    type: Array,
    default: []
  },
  people: {
    type: Array,
    default: []
  }
};
