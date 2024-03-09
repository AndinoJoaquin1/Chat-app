import'dotenv/config';
import express from "express";
import {authRouter} from './routes/auth.ts';


const app = express();

await app.use(express.json());

app.get('/text', function (req, res) {
    res.send('Hello World!'); // This will serve your request to '/'.
  });
app.use('/api/auth', authRouter);

app.listen(process.env.PORT,()=>{
    console.log('Server on port 4000');
});
