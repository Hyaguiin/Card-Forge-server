import Joi from 'joi';

export const userSchema = Joi.object({
  id: Joi.number().optional(),
  name: Joi.string().min(1).required(),
  secondname: Joi.string().min(1).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(0).required(),
  password: Joi.string().min(6).required(),
  lastLogged: Joi.date().optional(),
  isLogged: Joi.boolean().optional(),
  cards: Joi.array().items(
    Joi.object({
      id: Joi.number().optional(),
      name: Joi.string().required(),
      attack: Joi.number().required(),
      defense: Joi.number().required(),
      image: Joi.string().allow(null).optional(),
      createdAt: Joi.date().optional(),
      type: Joi.string().valid('magic', 'warrior', 'trap', 'spell').required(),
    })
  ).optional(),
});
