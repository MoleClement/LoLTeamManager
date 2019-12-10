const mongoose = require("mongoose");

var teamSchema = new mongoose.Schema({
    ObjetId:{
        type: ObjectID ,
        required:"Required"
    }
    name:{
        type: String,
        required: "Required",
    },

    players[]:{ 
    type: String,
    required: "Required",
    },

    training:{
        wednesday[]:{type:number,required :"Required"},
        friday[]:{type:number,required :"Required"},
        saturday[]:{type:number,required :"Required"},
        sunday[]:{type:number,required :"Required"}
    },

    strategy:[
    {
        name{type: String, required:"Required"},
        ratio{type: number, required"required"}
    }]

});

module.exports = mongoose.model('Coach', teamSchema, 'coach');