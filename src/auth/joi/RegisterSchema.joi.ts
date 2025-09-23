import * as Joi from 'joi';


export const registerSchema = Joi.object({
  name: Joi.string().min(1).required(),
  secondname: Joi.string().min(1).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(0).required(),
  password: Joi.string().min(6).required(),
  lastLogged: Joi.date().optional(),
  isLogged: Joi.boolean().optional(),
});