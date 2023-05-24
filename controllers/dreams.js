const express = require('express')
const router = express.Router();
const Dreams =require('../models/Dreams')


///Routes///

router.get('/dreams', async (req, res, next ) => {
    try{
        const dreams = await Dreams.find();
        res.json(dreams);
    } catch (error){
        console.log(error);
        next()
    }
});

router.get('/dreams/:id', async (req, res, next) => {
    try{

        const myDream = await Dreams.findById(req.params.id)
        res.json(myDream,"Hello World")
    } catch(error){
        console.log(error);
        next();
    }

});

router.post('/dreams', async (req, res, next) =>{
    try{
        const newDream = req.body
        await Dreams.create(req.body);
        console.log(newDream);
        res.redirect ('/dreams')
    } catch (error){
        console.log(error)
        next();
    }
});

router.put('/dreams/:id', async (req,res, next) => {
    try{
        const editedDreams = await Dreams.findByIdAndUpdate(req.params.id, req.body);
        res.redirect(`/dreams/${req.params.id}`);
     } catch(error){
        console.log(error);
        next();
     }

});

router.delete('/:id', async (req, res, next) => {
    try{
        const deletedDream = await Dreams.findByIdAndDelete(req.params.id);
        res.redirect('/dreams')
    
    } catch(error){
        console.log(error);
        next();
    }
})
module.exports = router;