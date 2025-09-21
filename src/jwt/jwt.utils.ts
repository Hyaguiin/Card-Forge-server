import { Injectable } from '@nestjs/common';
import { jwt_payload } from './jwt.payload';
import jwt from 'jsonwebtoken'
import env from 'src/envClean/env.envalid'
const SECRET_KEY = env.JWT_SECRET;
const REFRESH_KEY = env.JWT_REFRESH
const expires = '1h';
@Injectable()
export class jwtService{

    generateJwt = async(user: jwt_payload): Promise<string>=>{
        const payload = {
            id: user.id,
            email: user.email,
        }
        try{
            const token = jwt.sign( payload, SECRET_KEY, {expiresIn: expires});
            return token;
        }catch(err){
            if(err instanceof Error){
                throw new Error(`JwtError: ${err.message}`);
            }
            throw err;
        }
    }

    verifyJwt = (token: string): boolean =>{
        let status = false;
        try{
            const decode =  jwt.verify(token, SECRET_KEY);
            if(decode){
                status = true;
            }  
            return status;
        }catch(err){
            if(err instanceof Error){
                throw new Error(`JwtError: ${err.message}`);
            }
            throw err;
        }
    }

    refreshToken = async(token: string, user: jwt_payload): Promise<string> =>{
          
        try{
            const decode = jwt.verify(token, SECRET_KEY, {ignoreExpiration: true});
            if(!decode) throw new Error(`Token Não existe!`)
                const payload = {
                    id: user.id,
                    email: user.email
                }
                const newToken = jwt.sign(payload, REFRESH_KEY, {expiresIn: expires});

            return newToken;
        }catch(err){
            if(err instanceof Error){
                throw new Error(`JwtError: ${err.message}`);
            }
            throw err;
        }
    }
} 