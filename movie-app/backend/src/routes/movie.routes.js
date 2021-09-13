const { Router } = require('express');
const {
  getApi,
  getAllMovies,
  createMovie,
  getById,
  updateMovie,
  deleteMovie,
  deleteAllMovies
} = require('../controllers/movie.controller');

const routes = Router();

routes
  .route('/')
  .get(getApi);

routes
  .route('/favourites')
  .get(getAllMovies)
  .post(createMovie)
  .delete(deleteAllMovies);

routes
  .route('/favourites/:id')
  .get(getById)
  .put(updateMovie)
  .delete(deleteMovie);

module.exports = routes;
