import 'dotenv/config';
import { MongoClient } from 'mongodb';
import { Request, Response } from 'express';
import { genSaltSync, hashSync } from 'bcrypt';

import { User } from '../types';

const uri = `${process.env.DB_URL}`;

export const createUser = async (req: Request<{}, {}, User>, res: Response) => {
    const client = new MongoClient(uri);
    const { email, password, nickname } = req.body;
    try {
        await client.connect();

        const db = client.db('Chat-app');
        const collection = db.collection('Users');

        let user = await collection.findOne({ email });

        if (user) {
            return res.status(400).json({
                msg: 'Email is already use'
            });
        }

        const salt = genSaltSync();
        const hashPassword = hashSync(password, salt);

        await collection.insertOne({
            nickname,
            email,
            password: hashPassword,
        });

        res.status(201).json({
            msg: 'User registered successfully'
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            err
        });
    } finally {
        await client.close();
    }
}