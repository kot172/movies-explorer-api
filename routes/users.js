const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  editUserData, getMeUser
} = require('../controllers/users');
const { emailRegex } = require('../utils/constans');

router.get('/me', getMeUser);

router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().required().pattern(emailRegex),
  }),
}), editUserData);

module.exports = router;