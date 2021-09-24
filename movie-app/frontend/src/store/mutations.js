/* eslint-disable no-param-reassign */

export default {
  getAllMovies(state, payload) {
    state.movies = [...payload];
  },

  createMovie(state, payload) {
    state.movies = [...payload];
  },

  deleteMovie(state, id) {
    state.movies = state.movies.filter((movie) => movie.id !== id);
  }

};
