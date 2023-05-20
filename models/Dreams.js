const mongoose = require('mongoose');
/// Dreams Schema///

const dreamsSchema = new mongoose.Schema(
    {
      
        title:{
            type:String,
            required:[true,"Dream must have a dream title."],
            unique: true
        },
       description: {
            type:String,
            required:[true,"Dream must have a description/dream meaning."],
            unique: true

        },
        img:{
            type: String,
            required: true,
            unique: true

        }
    },
    {
        timestamps: true
    }
);
module.exports = Dreams;