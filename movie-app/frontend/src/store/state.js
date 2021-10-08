export default {
  user: {
    type: Object,
    default: {
      email: '',
      password: ''
    }
  },
  token: {
    type: String,
    default: ''
  },
  userLogged: {
    type: Boolean,
    default: false
  },
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
  }
};
