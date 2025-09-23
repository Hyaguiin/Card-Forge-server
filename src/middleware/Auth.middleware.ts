
import { Injectable } from "@nestjs/common";
import { NextFunction, Response, Request } from "express";

@Injectable()
export class AuthMiddleware{
    constructor(){
    }
    authMiddleware = async(req: Request, res: Response, next: NextFunction): Promise<void>=>{
        try{
            const headers = req.headers.authorization;
            if(!headers){
                throw new Error("No token provided");
            }
            const decode = headers.split("")[1];
            if(!decode){
                throw new Error("No token provided");
            }
            req.user = decode;
            return next();
        }catch(err){
            if(err instanceof Error){
                throw new Error(`Error: ${err}`);
            }
        }
    }
}