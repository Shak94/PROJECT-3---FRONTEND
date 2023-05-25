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

        const myNightmare = await Nightmare.findById(req,params.id)
        res.json(myNightmare)
    } catch(error){
        console.log(error);
    }

});
router.post('/nightmares', async (req, res, next) =>{
    try{
        const newNightmare= req.body
        await Nightmare.create(req.body);
        console.log(newNightmare);
        res.redirect ('/nightmares')
    } catch (error){
        console.log(error)
        next();
    }
});

router.put('/dreams/:id', async (req, res, next) => {
    try{
        const editedDreams = await Dreams.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/dreams/${req.params.id}`);
     } catch(error){
        console.log(error);
        next();
     }

});

router.delete('/dreams/:id', async (req, res, next) => {
    try{
        const deletedDream = await Dreams.findByIdAndDelete(req.params.id);
        res.redirect('/dreams')
    
    } catch(error){
        console.log(error);
        next();
    }
})
module.exports = router;


module.exports = router;