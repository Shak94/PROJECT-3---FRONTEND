const mongoose = require('mongoose');
require('./config/connection');
/// My Nightmares Schema ///

const nightmaresSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:[true,"Nightmare must have a  title."],
            unique: true
        },
       meaning: {
            type:String,
            required:[true,"Nightmare must have a description/nightmare meaning."],
            unique: true

        },
        image:{
            type: String,
            required: true,
            unique: true

        }
    },
    {
        timestamps: true
    }
);
const Nightmares  = mongoose.model('Nightmare', nightmaresSchema);
// module.exports = Nightmares;
module.exports =[
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
