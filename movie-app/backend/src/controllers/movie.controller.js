const axios = require('axios');
const chalk = require('chalk');
const debug = require('debug')('server:coinController');
const Movie = require('../models/movie.model');

function controller() {
  const getApi = async (req, res) => {
    await axios.get(process.env.API_URL)
      .then((response) => {
        res.json(response);
        debug(`${chalk.green(response)}`);
      })
      .catch((error) => {
        res.status(500);
        res.send(error);
        debug(`${chalk.red(error)}`);
      });
  };

  const getAllMovies = async (req, res) => {
    try {
      const movies = await Movie.find(req.query);
      res.json(movies);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const createMovie = async (req, res) => {
    try {
      const newMovie = await Movie.create(req.body);
      res.json(newMovie);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const getById = async (req, res) => {
    const { id } = req.params;
    try {
      const movie = await Movie.findById(id);
      res.json(movie);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const updateMovie = async (req, res) => {
    const { id } = req.params;
    try {
      const movie = await Movie.findByIdAndUpdate(
        id,
        { ...req.body },
        { new: true, useFindAndModify: false }
      );
      res.json(movie);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const deleteMovie = async (req, res) => {
    const { id } = req.params;
    try {
      await Movie.findByIdAndDelete(id);
      res.status(204);
      res.send();
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  const deleteAllMovies = async (req, res) => {
    try {
      await Movie.deleteMany(req.query);
      res.status(204);
      res.send();
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  };

  return {
    getApi,
    getAllMovies,
    createMovie,
    getById,
    updateMovie,
    deleteMovie,
    deleteAllMovies
  };
}

module.exports = controller();
