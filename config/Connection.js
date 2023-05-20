const mongoose = require('mongoose')

const connectionString = process.env.MONGO_DB_URI;
console.log(connectionString);

////MONGO DB TO MONGOOSE CONNECTION///
mongoose.connnect(connnectionString)

//MONGO DB CONNECTION ON SUCCESS///
mongoose.connection.on('connnected', () =>{
    console.log(`[${new Date().toLocaleTimeString()}] Mongo DB connection suc`)
})

//MONGO DB CONNECTION ON ERROR//
mongoose.connection.on('error',(error)=>{
    console.log('MongoDb connection error',error)
})

///MONGO DB DISCONNECTED//
mongoose.connection.on(`disconnnected`,() => {
    console.log('MongoDB disconnected')
});