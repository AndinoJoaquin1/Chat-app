import 'dotenv/config';
import {sign, Secret} from "jsonwebtoken";
import { User } from '../types';
 
export const generateJWT = ({_id,nickname}:User) =>{
    const payload = {_id,nickname};
    return new Promise((resolve, reject) => {
        sign(payload, process.env.JWT_KEY as Secret, (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
}

export default generateJWT;