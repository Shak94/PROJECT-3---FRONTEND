const mongoose = require('mongoose');
require('../config/db.connection')


const dreamsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Dream must have a dream title."],
            unique: true
        },
        meaning: {
            type: String,
            required: [true, "Dream must have a description/dream meaning."],
            unique: true
        },
        image: {
            type: String,
            required: true,
            unique: true
        }
    },
    {
        collection: "dreams",
        timestamps: true
    }
);

const Dreams = mongoose.model('Dream', dreamsSchema);

module.exports = Dreams;
