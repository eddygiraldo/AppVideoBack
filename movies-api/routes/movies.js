const express = require('express');
const { moviesMock } = require('../utils/mocks/movies');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  router.get('/', async function (req, res, next) {
    try {
      const movies = await Promise.resolve(moviesMock);
      res.status(200).json({
        data: movies,
        message: 'movies listed'
      });
    } catch (error) {
      console.log('Errorrr')
      next(error);
    }
  });

  router.get('/:movieId', async function (req, res, next) {
    try {
      const movies = await Promise.resolve(moviesMock[0]);
      res.status(200).json({
        data: movies,
        message: 'movie retieved'
      });
    } catch (error) {
      console.log('Errorrr')
      next(error);
    }
  });

  router.post('/', async function (req, res, next) {
    try {
      const createMovieId = await Promise.resolve(moviesMock[0].id);
      res.status(200).json({
        data: createMovieId,
        message: 'movie create'
      });
    } catch (error) {
      console.log('Errorrr')
      next(error);
    }
  });

  router.put('/:movieId', async function (req, res, next) {
    try {
      const updatedMovieId = await Promise.resolve(moviesMock[0].id);
      res.status(201).json({
        data: updatedMovieId,
        message: 'movies edited'
      });
    } catch (error) {
      console.log('Errorrr')
      next(error);
    }
  });

  router.delete('/:movieid', async function (req, res, next) {
    try {
      const deleteMovieId = await Promise.resolve(moviesMock[0].id);
      res.status(200).json({
        data: deleteMovieId,
        message: 'movie deleted'
      });
    } catch (error) {
      console.log('Errorrr')
      next(error);
    }
  });
}

module.exports = moviesApi;