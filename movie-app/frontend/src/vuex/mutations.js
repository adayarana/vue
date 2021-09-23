/* eslint-disable no-param-reassign */

export default {
  getAllMovies(state, movies) {
    state.movies = [...movies];
  },

  createMovie(state, payload) {
    state.movies = [...payload];
  }

};
