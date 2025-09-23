import * as Joi from 'joi';

export const loginSchema = Joi.object({
  id: Joi.number().optional(),
  email: Joi.string().email().required(),
  senha: Joi.string().min(6).required(), // ajustar tamanho mínimo conforme sua regra
});
