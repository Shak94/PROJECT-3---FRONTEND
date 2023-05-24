
const mongoose=require('mongoose');
const connectionString=process.env.MONGO_DB_URI; // String coming in from .env .
mongoose.connect(connectionString); // Connects Mongoose to MongoDB via connectionString.

mongoose.connection.on('connected', () => { 
    console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected your ready to go!! `) //Shows MongoDB connection was accomplished.
})
mongoose.connection.on('error', (error) => { //MongoDb connnection has an error.
    console.log('MongoDB connection error ', error)
})
mongoose.connection.on('disconnected', () => { //Mongo Db is disconnected.
    console.log('MongoDB disconnected ') 
})

module.exports = { mongoose};