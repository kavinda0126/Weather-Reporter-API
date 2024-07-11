const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const WeatherSchema = require('./weather').schema;

const userSchema = new Schema({
    email:{type:String, required:true},
    location:{
        latitude:{type:Number, required:true},
        longitude:{type:Number, required:true}
    },

    weather:[
        WeatherSchema
    ]

});



module.exports = mongoose.model('User', userSchema);