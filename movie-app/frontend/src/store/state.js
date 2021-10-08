export default {
  user: {
    type: Object,
    default: {
      email: '',
      password: ''
    }
  },
  token: '',
  userLogged: false,
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
