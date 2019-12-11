const mongoose = require("mongoose");

//schema of our db
var playerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: "Required",
    },
    role:{
        type: String,
        required: "Required",
    },
    masteredChampions:[{
        type : String,
        required: "Required",
    }],
    dislikedChampions:[{
        type: String,
        required: "Required",
    }],
    toTrainChampions:[{
        type: String,
        required: "Required",
    }]
});

// export our model
module.exports = mongoose.model('Player', playerSchema, 'player');