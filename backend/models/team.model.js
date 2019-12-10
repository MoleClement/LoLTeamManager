const mongoose = require("mongoose");

//schema of our db
var teamSchema = new mongoose.Schema({
    name:{
        type: String,
        required: "Required",
    },
    players:[{
        type: Number,
        required: "Required",
    }],
    training:{
        sunday: [{ type: Number}],
        wednesday: [{ type: Number}],
        friday: [{ type: Number}],
        saturday: [{ type: Number}],
    },
    strategy:[{
        name : { type: String},
        winRate:  { type: Number}
    }],
    practices:{
        left: [{type : Number}],
        right: [{type: Number}]
    }

});

// export our model
module.exports = mongoose.model('Team', teamSchema, 'team');