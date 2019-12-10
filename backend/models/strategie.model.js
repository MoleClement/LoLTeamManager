const mongoose = require("mongoose");

//schema of our db
var strategieSchema = new mongoose.Schema({
    name:{
        type: String,
        required: "Required",
    },
    ratio:{
        type: Number,
        required: "Required",
    }
});

// export our model
module.exports = mongoose.model('Strategie', strategieSchema, 'strategie');