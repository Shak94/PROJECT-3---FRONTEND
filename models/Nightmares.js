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
// module.exports = Nightmares;
module.exports =[
    {
    title:"",
    meaning:"",
    image:""
},{
    {
    title:"",
    meaning:"",
    image:""
},{
    {
    title:"",
    meaning:"",
    image:""
},{
    {
    title:"",
    meaning:"",
    image:""
},{
    {
    title:"",
    meaning:"",
    image:""
},{
    {
    title:"",
    meaning:"",
    image:""
},{
    {
    title:"",
    meaning:"",
    image:""
},{
    {
    title:"",
    meaning:"",
    image:""
},{
    {
    title:"",
    meaning:"",
    image:""
},{
]
