const Player = require('../models/player.model.js');

// Return all the players from the db
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
};


// Return one coach by its name from the db
exports.findOne = (req, res) => {

    Player.findOne({'id': req.body.id})
        .then(strategies => {
            console.log(players);
            res.send(players);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving players.'
            });
        });

};


// Create a new coach in the db
exports.create = (req, res) => {
    /*console.log(req.body);*/
    // Request all the informations required in collection player
    if (!req.body.id || !req.body.role || !req.body.masteredChampions || !req.body.dislikedChampions || !req.body.toTrainChampions || !req.body.practices) {
        return res.status(400).send({
            message: 'One field is empt'
        });
    }

    // Create a new coach
    const player = new Player({
        id: req.body.id,
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


/*// Delete a User with the specified UserId in the request
exports.delete = (req, res) => {
    Coach.findByIdAndDelete(req.body.coachId)
        .then(coach => {
            if (!coach) {
                return res.status(404).send({
                    message: 'Coach ${req.body.name} not found'
                });
            }
            res.send({ message: `Coach ${req.body.name} deleted` });
        })

};*/

// delete a coach by its name
exports.delete = (req, res) => {
    // find the coach
    Strategie.findOneAndDelete({'id': req.body.id})
        .then(player => {
            // if not found : error message
            if (!player) {
                return res.status(404).send({
                    message: 'player not found'
                });
            }
            //if found : return a message
            res.send({ message: `player ${req.body.id} deleted` });
        });
};

