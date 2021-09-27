/* eslint-disable no-param-reassign */

export default {
  getAllMovies(state, payload) {
    state.movies = [...payload];
  },

  createMovie(state, payload) {
    state.movies = [...payload];
  },

  getMovieById(state, id) {
    state.movie = id;
  },

  updateMovie(state, payload) {
    state.movie = { ...payload };
  },

  handleFavouriteMovie(state, id) {
    state.movies = this.state.movies.map((movie) => (movie.id === id ? {
      ...movie,
      favourite: !movie.favourite
    } : movie));
  },

  deleteMovie(state, id) {
    state.movies = state.movies.filter((movie) => movie.id !== id);
  },

  deleteAllMovies(state) {
    state.movies = state;
  }

};
