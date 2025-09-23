import * as Joi from 'joi';

export const CardSchema = Joi.object({
  name: Joi.string().min(1).max(255).required(),
  attack: Joi.number().integer().min(0).required(),
  defense: Joi.number().integer().min(0).required(),
  image: Joi.string().uri().allow(null, '').optional(), // permite URL, nulo ou string vazia
  type: Joi.string()
    .valid('magic', 'warrior', 'trap', 'spell')
    .required(),
  userId: Joi.number().integer().required(), // supondo que o card pertence a um usuário
});
