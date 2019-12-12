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

// Return one player by its id from the db
exports.findByName = (req, res) => {
    Player.findOne({name:req.query.name})
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
    if (!req.body.name) {
        return res.status(400).send({
            message: 'Insert a valid name'
        });
    }
    // Create a new Player
    const player = new Player({
        name: req.body.name,
        role: req.body.role,
        masteredChampions: req.body.masteredChampions,
        dislikedChampions: req.body.dislikedChampions,
        toTrainChampions: req.body.toTrainChampions,

    });

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

exports.update = (req, res) => {

    // Request all the information required in collection coach
    if (!req.body.player || !req.body.player._id) {
        return res.status(400).send({
            message: 'Need player Id data'
        });
    } else {

        const update = {
            masteredChampions: req.body.player.masteredChampions,
            dislikedChampions: req.body.player.dislikedChampions,
            toTrainChampions: req.body.player.toTrainChampions,
            name: req.body.player.name,
            role: req.body.player.role,

        };
        // find the coach
        Player.findOneAndUpdate({_id: req.body.player._id}, update)
            .then(team => {
                // if not found : error message
                if (!team) {
                    return res.status(404).send({
                        message: 'Player not found'
                    });
                }
                //if found : return a message
                res.send({message: `Player updated`});
            });
    }

};

// delete a player by its name
exports.delete = (req, res) => {
    // find the coach
    Player.findOneAndDelete(req.body.playerId)
        .then(player => {
            // if not found : error message
            if (!player) {
                return res.status(404).send({
                    message: 'player not found'
                });
            }
            //if found : return a message
            res.send({message: `player deleted`});
        });
};

