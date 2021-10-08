/* eslint-disable no-param-reassign */

export default {
  getApiShows(state, payload) {
    state.shows = [...payload];
  },

  signup(state, payload) {
    state.user = { ...payload.user };
  },

  login(state, payload) {
    state.userLogged = true;
    state.user = { ...payload.user };
    state.token = payload.token;
  },

  logout(state) {
    state.userLogged = false;
    state.user = {};
    state.token = '';
  },

  getAllMovies(state, payload) {
    state.movies = [...payload];
  },

  createMovie(state, newMovie) {
    state.movies.push(newMovie);
  },

  getMovieById(state, id) {
    state.movie = id;
  },

  updateMovie(state, newMovie) {
    state.movie = { ...newMovie };
  },

  handleFavouriteMovie(state, newMovie) {
    state.movies = this.state.movies.map((movie) => (movie.id === newMovie.id ? {
      ...movie,
      favourite: !movie.favourite
    } : movie));
  },

  deleteMovie(state, id) {
    state.movies = state.movies.filter((movie) => movie.id !== id);
  },

  deleteAllMovies(state) {
    state.movies = [];
  }

};
