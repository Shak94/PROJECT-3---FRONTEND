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
        const myNightmare = await Nightmares.findById(req.params.id)
        res.json(myNightmare)
    } catch(error){
        console.log(error);
    }

});
router.post('/nightmares', async (req, res, next) =>{
    try{
        const newNightmare= req.body
        await Nightmares.create(req.body);
        console.log(newNightmare);
        res.redirect ('/nightmares')
    } catch (error){
        console.log(error)
        next();
    }
});

router.put('/nightmares/:id', async (req, res, next) => {
    try {
        const editedNightmare = await Nightmares.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/nightmares/${req.params.id}`);
    } catch (error) {
        console.log(error);
        next();
    }
});


router.delete('/nightmares/:id', async (req, res, next) => {
    try{
        const deletedNightmare = await Nightmares.findByIdAndDelete(req.params.id);
        res.redirect('/nightmares')
    
    } catch(error){
        console.log(error);
        next();
    }
})
module.exports = router;


