const express = require('express');
const router = express.Router();
const Dreams = require('../models/Dreams');

const seedData = [
    {
        title: "Finding Money or Valuables",
        meaning: "Discovering money or valuables in a dream often signifies potential opportunities, abundance, or a sense of self-worth. It can indicate that you are recognizing your own value or uncovering hidden talents.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-OzAsRNheBsjgkNHMecK3ZQZnovNBsEyyI4p8e2ELbw&usqp=CAU&ec=48665701"
    },
    {
        title: "Dreaming of Joyful Activities",
        meaning: "Dreaming of engaging in activities that bring you happiness, such as dancing, singing, or playing, can signify inner contentment, joy, and a balanced emotional state. It may indicate that you are in touch with your passions and finding fulfillment in life.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYnPx8Wut0yjXve7dV4oMUrKA7vi3AE4mBDQvFwnY7xw&usqp=CAU&ec=48665701"
    },
    {
        title: "Exploring New Locations",
        meaning: "Dreaming of traveling to unfamiliar locations can represent a desire for exploration, growth, or new experiences. It may suggest that you are open to change or seeking a fresh perspective.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRjpCu650oYE1hrngd42NTnLqTuitm_qVtAC23EmzLrA&usqp=CAU&ec=48665701"
    },
    {
        title: "Winning",
        meaning: "This dream often indicates feelings of achievement, recognition, or validation. It may symbolize a sense of accomplishment or a need for acknowledgment in your waking life.",
        image: "https://static01.nyt.com/images/2019/07/07/sports/07wwc-final/merlin_157608204_cfa4e922-eeae-4a1a-aec9-dfb596b3112d-superJumbo.jpg"
    },

    {
        title: "Surrounded by Nature",
        meaning: "Dreaming of being in a serene natural environment, such as a beautiful forest or a peaceful beach, can represent a need for relaxation, rejuvenation, and connection with the natural world. It may symbolize your desire for tranquility, balance, and a deeper connection with yourself.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicmIZiHI6NJOGiW8QZzhPqOGw4ZJrc9A060Tu5ZvoRQ&usqp=CAU&ec=48665701"
    },
    {
        title: "Reconciliation with a Friend or Family Member",
        meaning: "Dreaming of reconciling with someone you had a conflict with or who you haven't spoken to in a while can signify a desire for resolution and harmony. It may indicate a willingness to mend relationships, communicate openly, and restore a sense of connection.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStf9L1ANFPfxuvIK1e6ZZTU7teKVr9bssXu8AMAKwSag&usqp=CAU&ec=48665701"
    },
    {
        title: "Saving Someone's Life",
        meaning: "Dreaming of rescuing or saving someone's life can symbolize your compassionate nature and willingness to help others. It may indicate that you possess the qualities of empathy, support, and a desire to make a positive impact in your waking life.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbIZZ53omurju3yL2W9m85wB83UrGBqa6WYRkT14Tr2Q&usqp=CAU&ec=48665701"
    },
    {
        title: "Meeting a Celebrity or Someone Admired",
        meaning: "Interacting with a celebrity or a person you admire in a dream can reflect aspirations, inspiration, or a desire for recognition. It may symbolize your own desire for success or personal growth.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTHTWPwJst-z_vv02oCW-szycf9vh35oP_iT-gBhJWyg&usqp=CAU&ec=48665701"
    },
    {
        title: "Flying",
        meaning: "Represents freedom, liberation, and a sense of being in control of your life. It may indicate that you have overcome obstacles and are experiencing personal growth.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeK4qDWxFM8vQl2nZ9bUGJfVGJfvEQjzXORTf0wIZd9w&usqp=CAU&ec=48665701"
    },
    {
        title: "Reuniting with a loved one who has passed away",
        meaning: "Dreaming of a deceased loved one can provide comfort and closure. It may signify that you are ready to move forward from grief or that the person you lost is still present in your heart and memories.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxBP-oBLjZ4k3XoiF2OF2MyDVxysPsiqjoJQThEmc1UQ&usqp=CAU&ec=48665701"
    },


];
router.get('/seed', async (req, res, next) => {
    try {
        await Dreams.deleteMany({});
        await Dreams.insertMany(seedData);
        res.redirect('/dreams');
    } catch(err) {
        console.log(err);
        next();
    }
})

module.exports = router;