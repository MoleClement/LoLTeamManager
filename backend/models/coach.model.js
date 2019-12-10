const mongoose = require("mongoose");

//schema of our db
var coachSchema = new mongoose.Schema({
    name:{
        type: String,
        required: "Required",
    },
    nbTeams:{
        type: Number,
        required: "Required",
    },
    teams:{
        type: String,
        required: "Required",
    }
});

// export our model
module.exports = mongoose.model('Coach', coachSchema, 'coach');