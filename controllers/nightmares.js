const express = require('express');
const router = express.Router();
const Nightmares = require('../models/Nightmares');

///Routes///

router.get('/nightmares', async (req, res) => {
    try{
        const nightmares = await Nightmares.find();
        res.json(nightmares);
    } catch (error){
        console.log(error);
    }
});

router.get('/nightmares/:id', async (req, res) => {
    try{

        const myNightmare = await Nightmare.findByID(req,params.id)
        res.json(myNightmare)
    } catch(error){
        console.log(error);
    }

});
module.exports = router;