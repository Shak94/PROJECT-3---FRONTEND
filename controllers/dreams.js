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
        res.json(myDream)
    } catch(error){
        console.log(error);
        next();
    }

});

router.post('/dreams', async (req, res, next) =>{
    try{
        const newDream = await Dreams.create(req.body);
        console.log(newDream);
        res.json(newDream)
    } catch (error){
        console.log(error)
        next();
    }
});

router.put('/dreams/:id', async (req, res, next) => {
    try{
        const editedDream = await Dreams.findByIdAndUpdate(req.params.id, req.body);
        res.json(editedDream);
     } catch(error){
        console.log(error);
        next();
     }

});

router.delete('/dreams/:id', async (req, res, next) => {
    try{
        const deletedDream = await Dreams.findByIdAndDelete(req.params.id);
        console.log(deletedDream)
        res.json(deletedDream)
    
    } catch(error){
        console.log(error);
        next();
    }
})


module.exports = router;