import { UserDTO } from './src/user/types/User.DTO';
import { Request } from 'express';
//p funcionar middleware. sempreNecessário.
declare module 'express-serve-static-core' {
  interface Request {
    user?: UserDTO;
  }
}
