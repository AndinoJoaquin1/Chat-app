import {Router} from 'express';
import { createUser, loginUser } from '../controllers/auth.ts';

export const authRouter=Router();

authRouter.post('/register', createUser);

authRouter.get('/login', loginUser);
