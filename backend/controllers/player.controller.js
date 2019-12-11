const Player = require('../models/player.model.js');

/*// Return all the players from the db
exports.findAll = (req, res) => {
    Player.find()
        .then(players => {
            console.log(players);
            res.send(players);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving players.'
            });
        });
};*/


// Return one player by its id from the db
exports.findById = (req, res) => {
    Player.findById(req.query.id)
        .then(player => {
            console.log(player);
            res.send(player);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving players.'
            });
        });
};


// Create a new player in the db
exports.create = (req, res) => {
    /*console.log(req.body);*/
    // Request all the informations required in collection player
    if (!req.body.name || !req.body.role || !req.body.masteredChampions || !req.body.dislikedChampions || !req.body.toTrainChampions || !req.body.practices) {
        return res.status(400).send({
            message: 'One field is empty'
        });
    }

    // Create a new coach
    const player = new Player({
        name: req.body.name,
        role: req.body.role,
        masteredChampions : req.body.masteredChampions,
        dislikedChampions : req.body.dislikedChampions,
        toTrainChampions : req.body.toTrainChampions,
        practices : req.body.practices,

    });
    console.log(player);

    // Save the new coach in the db and returns it
    player
        .save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            // Error message
            res.status(500).send({
                message: err.message || 'Cannot create a new player.'
            });
        });
};

// delete a playerw by its name
exports.delete = (req, res) => {
    // find the coach
    Player.findOneAndDelete(req.body.id)
        .then(player => {
            // if not found : error message
            if (!player) {
                return res.status(404).send({
                    message: 'player not found'
                });
            }
            //if found : return a message
            res.send({ message: `player deleted` });
        });
};

