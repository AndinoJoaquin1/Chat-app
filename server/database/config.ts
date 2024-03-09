import { MongoClient } from 'mongodb';
import 'dotenv/config';

const url = `${process.env.DB_URL}`;


export const dbConnection = async () => {
  try {
    const client = new MongoClient(url);

    await client.connect();



    console.log("DB ON");
  } catch (err) {
    console.log(err);
  }
}

export default dbConnection;
