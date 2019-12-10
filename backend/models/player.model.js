const mongoose = require("mongoose");

//schema of our db
var teamSchema = new mongoose.Schema({
    id:{
        type: String,
        required: "Required",
    },
    role:{
        type: String,
        required: "Required",
    },
    masteredChampions:{
        typesString,
        required: "Required",
    },
    dislikedChampions{
        type: String,
        required: "Required",
    },
    toTrainChampions:{
        type: String,
        required: "Required",
    },
    toTrainChampions:{
        type: String,
        required: "Required",
    }
})

// export our model
module.exports = mongoose.model('Team', playerSchema, 'Teams');