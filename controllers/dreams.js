const express = require('express')
const router = express.Router();
const Dreams =require('../models/Dreams')


///Routes///

router.get('/dreams', async (req, res) => {
    try{
        const dreams = await Dreams.find();
        res.json(dreams);
    } catch (error){
        console.log(error);
    }
});

router.get('/dreams/:id', async (req, res) => {
    try{

        const myDream = await Dreams.findById(req.params.id)
        res.json(myDream,"Hello World")
    } catch(error){
        console.log(error);
    }

});
module.exports = router;