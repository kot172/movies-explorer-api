const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  addMovie, getMovies, deleteMovie,
} = require('../controllers/movies');
const { urlRegex } = require('../utils/constans');

router.get('/', getMovies);

router.delete('/:movieId', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().length(24).hex().required(),
  }),
}), deleteMovie);

router.post('/', celebrate({
  body: Joi.object().keys({
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    description: Joi.string().required(),
    year: Joi.string().required(),
    image: Joi.string().required().pattern(urlRegex),
    trailerLink: Joi.string().required().pattern(urlRegex),
    thumbnail: Joi.string().required().pattern(urlRegex),
    movieId: Joi.number().required(),
  }),
}), addMovie);

module.exports = router;
