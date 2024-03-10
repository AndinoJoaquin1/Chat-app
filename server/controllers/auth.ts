import 'dotenv/config';
import { MongoClient } from 'mongodb';
import { Request, Response } from 'express';
import { genSaltSync, hashSync, compareSync } from 'bcrypt';

import { User } from '../types';
import { body } from 'express-validator';

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
            msg: 'User registered successfully',
            nickname:nickname,
            password:hashPassword
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
export const loginUser = async (req: Request<{}, {}, User>, res: Response) => {
    const client = new MongoClient(uri);
    const { email, password, nickname } = req.body;

    try {
        await client.connect();

        const db = client.db('Chat-app');
        const collection = db.collection('Users');

        const user = await collection.findOne({ email });

        if (!user) {
            return res.status(400).json({
                msg: 'The email address provided does not exist in our system'
            })
        }

        const validPassword = compareSync(password, user.password);

        if (!validPassword) {
            return res.status(400).json({
                msg: 'The password provided is incorrect'
            })
        }

        res.json({
            msg:'Login ok',
            uid: user._id,
            name: user.nickname
        })
    } catch (err) {
        console.log(err);
    } finally {
        await client.close();
    }
}