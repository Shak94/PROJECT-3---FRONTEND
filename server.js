/// DEPENDENCIES///
require("dotenv").config()
const express = require ('express')
const app = express ();
const PORT =process.env.PORT || 4000
const cors = require('cors');
const dreamsController=require(`./controllers/dreams`)
const nightmaresController = require("./controllers/nightmares")

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