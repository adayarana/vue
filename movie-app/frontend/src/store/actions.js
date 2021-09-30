import axios from 'axios';

export default {
  async getAllMovies({ commit }) {
    const { data } = await axios.get(process.env.VUE_APP_DDBB_MOVIES_URL);
    commit('getAllMovies', data);
  },

  async createMovie({ commit }, newMovie) {
    const { data } = await axios.post(process.env.VUE_APP_DDBB_MOVIES_URL, newMovie);
    commit('createMovie', data);
  },

  async getMovieById({ commit }, id) {
    await axios.get(`${process.env.VUE_APP_DDBB_MOVIES_URL}/${id}`);
    commit('getMovieById', id);
  },

  async updateMovie({ commit }, newMovie) {
    await axios.put(`${process.env.VUE_APP_DDBB_MOVIES_URL}/${newMovie.id}`, newMovie);
    commit('updateMovie', newMovie);
  },

  async handleFavouriteMovie({ commit }, newMovie) {
    await axios.put(`${process.env.VUE_APP_DDBB_MOVIES_URL}/${newMovie.id}`);
    commit('handleFavouriteMovie', newMovie);
  },

  async deleteMovie({ commit }, id) {
    await axios.delete(`${process.env.VUE_APP_DDBB_MOVIES_URL}/${id}`);
    commit('deleteMovie', id);
  },

  async deleteAllMovies({ commit }) {
    await axios.delete(process.env.VUE_APP_DDBB_MOVIES_URL);
    commit('deleteAllMovies');
  }

};
