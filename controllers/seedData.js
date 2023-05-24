const express = require('express');
const router = express.Router();
const Dreams = require('../models/Dreams');
const Nightmares = require('../models/Nightmares');

const dreamsSeedData = [
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
const nightmaresSeedData =[
    {
    title:"Falling ",
    meaning:"Nightmares of falling often represents a lack of control or fear of losing control in your waking life. It may indicate anxiety about a situation or a sense of instability.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cOTpgtelou7Vgdpk39CsX5AXWJJ48shTvaIPvVoZb7PuOO6sryrsQmJ_KM9K3GxWKpDNI1eAiIw&usqp=CAU&ec=48665701"
},
    {
    title:"Teeth Falling Out",
    meaning:"Nightmares of teeth falling out can indicate a fear of losing power, confidence, or the ability to communicate effectively. It might suggest concerns about your self-image or concerns about your appearance.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvPJnX6vshs4-1OzWYCb2vbYDmMDlKT_8u_-LAdDKpYA&usqp=CAU&ec=48665701"
},
    {
    title:"Being Trapped",
    meaning:"Feeling trapped or confined in a dream can represent a sense of being stuck or trapped in a particular situation or relationship in your waking life. It may signify a need for change or a desire for more freedom.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqhD61JCD8qdJ6F4NDbyTqZqkyUryle9RTBaeBP7Takg&usqp=CAU&ec=48665701"
},
    {
    title:"Drowining",
    meaning:"Nightmares of drowning can indicate being overwhelmed by emotions or circumstances. It may suggest feelings of helplessness, suffocation, or being unable to cope with a challenging situation.",
    image:"https://as2.ftcdn.net/v2/jpg/04/44/60/45/1000_F_444604508_l5WG6cpfOqAXoEs7tS1EorMjbjmsdQwp.jpg"
},
    {
    title:"Being Chased",
    meaning:"Being pursued in a dream can symbolize avoidance or fear of confronting an issue or problem. It may suggest a need to confront and address your fears or unresolved emotions.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQPJ6JOwCA1YV9eVcORqtDcVI2n9hm_f7LhDzZBGkrumP_WbjQcEdSGW1XHxphhymWx0jj8ZcTOos&usqp=CAU&ec=48665701"
},
    {
    title:"Being Attacked ",
    meaning:" Nightmares involving attacks or monsters often symbolize unresolved conflicts, stress, or repressed emotions. They may represent inner struggles or external threats that you feel powerless to overcome",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_tPYpUWWHHRXTP5ojKw45Y2pT1QECPbZaIUgVX2yVcA&usqp=CAU&ec=48665701"
},
    {
    title:"Getting Lost",
    meaning:"Getting lost in a dream may signify a sense of directionlessness or uncertainty in your waking life. It can reflect a need for guidance, a fear of making the wrong choices, or a feeling of being disconnected",
    image:"https://media.istockphoto.com/id/1283730033/photo/a-man-with-a-lantern-at-a-crossroads-in-the-woods.jpg?b=1&s=170667a&w=0&k=20&c=KWKL_AwiBEuKtuhx5IcBxLWWaHq92IEtJwDFUp_OpBA="
},
    {
    title:"Natural Disasters",
    meaning:" Nightmares involving natural disasters, such as earthquakes, tornadoes, or floods, often symbolize feelings of instability or a lack of control. They may reflect overwhelming stress, major life changes, or a sense of chaos in your waking life.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMacodPSE_2gDEsIepSyQA4YJ46FRrYKR0toh_Nee9IA&usqp=CAU&ec=48665701"
},
    {
    title:"Unable to Run or Move",
    meaning:"Dreams where you try to run or move but find yourself paralyzed or unable to move can signify feelings of being stuck or unable to progress in some area of your life. It may represent fears of being held back or limitations that you perceive in yourself.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPdaepDHHEs7Oc4SOu4k4aHi1hqxAAimG6KepiCg9cYw&usqp=CAU&ec=48665701"
},
    {
    title:"Death or Dying",
    meaning:"Dreaming of death or dying is often not literal but represents a transition or significant change in your life. It may indicate the need to let go of the past, embrace change, or navigate a major life transition.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthZ9-qbEvdAHIab2w6YFzVqSfQNIjXkDh-WG_5mN6XQ&usqp=CAU&ec=48665701"
},
]


router.get('/seed', async (req, res, next) => {
    try {
      await Dreams.deleteMany({}); // Remove existing data
      await Dreams.insertMany(dreamsSeedData); // Insert the seed data
      res.redirect('/dreams'); // Redirect to a relevant endpoint
    } catch (err) {
      console.log(err);
      next(err);
    }
  });
  
  module.exports = router;