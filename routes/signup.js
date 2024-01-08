const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { addUser } = require('../controllers/users');
const { emailRegex } = require('../utils/constans');

router.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().email(emailRegex),
    password: Joi.string().required(),
  }).unknown(true),
}), addUser);

module.exports = router;
