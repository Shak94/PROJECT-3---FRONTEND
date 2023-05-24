/// DEPENDENCIES///
require("dotenv").config()
const express = require ('express')
const app = express ();
const PORT =process.env.PORT || 6000
const mongooseConnection = require("./config/connection")
const mongoose =require('mongoose')
const cors = require('cors');
const dreamsController=require(`./controllers/dreams`)
const nightmaresController = require("./controllers/nightmares")
const seedData = require('./controllers/seedData');

//MIDDLEWARE//
app.use(cors());
app.use(express.json());
app.use('',dreamsController)
app.use('',nightmaresController)
///ROUTES///

app.get('/',(req,res) =>{
    res.json("home")
})

app.get('/*', (req, res) => {
    res.json('Wrong URL');
});



app.listen(PORT,() => {
    console.log(` SERVER IS LISTENING ON PORT ${PORT}`)
})