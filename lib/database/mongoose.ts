import mongoose, {Mongoose} from "mongoose";

//getting mongodb url from the enviroment
const MONGODB_URL = process.env.MONGODB_URL;

//interface defining the structure of the cached conncection object

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

//setup a global cache object to store the connection
let cached: MongooseConnection = (global as any).mongoose;

if(!cached){
    cached = (global as any).mongoose = {
        conn: null,
        promise: null
    };
}

//Function to connect to database
export const connectToDatabase = async () => {
    //if a connection already exists return it
    if(cached.conn){
        return cached.conn;
    }

    //if no mongodb url throw an error
    if(!MONGODB_URL){
        throw new Error("No MongoDB connection string provided.");
    }

    //if no connection promise exists , create one
    cached.promise = cached.promise || mongoose.connect(MONGODB_URL, {dbName: 'imaginify', bufferCommands: false});

    //Await the conncection promise and store the connection 
    cached.conn = await cached.promise;

    //Return to connection
    return cached.conn;
}