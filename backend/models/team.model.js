const mongoose = require("mongoose");

var teamSchema = new mongoose.Schema({
    name:{
        type: String,
        required: "Required",
    },
    players:[{
        id: String,
        role: String,
        masteredChampions: String,
        dislikedChampions: String,
        toTrain:String,
        Practices:String
    }],
    sunday:[{
        period: ['Morning', 'Afternoon', 'Evening', 'Night'],
        value: Number
    }],
    saturday:[{
        period: ['Morning', 'Afternoon', 'Evening', 'Night'],
        value: Number
    }],
    friday:[{
        period: ['Morning', 'Afternoon', 'Evening', 'Night'],
        value: Number
    }],
    thursday:[{
        period: ['Morning', 'Afternoon', 'Evening', 'Night'],
        value: Number
    }],
    wednesday:[{
        period: ['Morning', 'Afternoon', 'Evening', 'Night'],
        value: Number
    }],
    tuesday:[{
        period: ['Morning', 'Afternoon', 'Evening', 'Night'],
        value: Number
    }],
    monday:[{
        period: ['Morning', 'Afternoon', 'Evening', 'Night'],
        value: Number
    }],
    strategy:[{
        name: String,
        ratio: Number
    }]
});

module.exports = mongoose.model('Coach', teamSchema, 'coach');