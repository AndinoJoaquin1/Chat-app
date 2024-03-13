import 'dotenv/config';
import { User } from '../types';
import { ObjectId } from 'mongodb';
import pkg, { Secret } from 'jsonwebtoken';
const {sign} = pkg;
 
export const generateJWT = (_id:string|ObjectId,nickname:string) =>{
    const payload = {_id,nickname};
    return new Promise((resolve, reject) => {
        sign(payload, process.env.JWT_KEY as Secret,(err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
}

export default generateJWT;