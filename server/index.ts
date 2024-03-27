import 'dotenv/config';
import express from "express";
import cors from 'cors';
import { authRouter } from './routes/auth.ts';


const app = express();

app.use(cors())

app.use(express.json());

app.use('/api/auth', authRouter);

app.listen(process.env.PORT, () => {
    console.log('Server on port 4000');
});
