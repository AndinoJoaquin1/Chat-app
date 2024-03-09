import {Router} from 'express';
import { createUser } from '../controllers/auth.ts';

export const authRouter=Router();

authRouter.post('/register', createUser);
