const express = require('express');
const router = express.Router();


///Routes///

router.get('/nightmares', async (req, res) => {
    try{
        const nightmares = await Nightmares.find();
        res.json(nightmares);
    } catch (error){
        console.log(error);
    }
});

router.get('/:id', async (req, res) => {
    try{

        const myNightmare = await Nightmare.findByID(req,params.id)
        res.json(myNightmare)
    } catch(error){
        console.log(error);
    }

});
module.exports = router;