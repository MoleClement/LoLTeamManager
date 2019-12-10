const Team = require('../models/team.model.js');

// Return all the players from the db
exports.findAll = (req, res) => {
    Team.find()
        .then(teams => {
            console.log(teams);
            res.send(teams);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving teams.'
            });
        });
};


// Return one coach by its name from the db
exports.findOne = (req, res) => {

    Player.findOne({'name': req.body.name})
        .then(teams => {
            console.log(teals);
            res.send(teams);
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
    if (!req.body.team || !req.body.training ) {
        return res.status(400).send({
            message: 'One field is empty'
        });
    }

    // Create a new team
    const team = new Team({
        ObjectId: req.body.ObjectId,
        name: req.body.name,
        players[]: req.body.players,
        training[]: req.body.training,
        strategy: req.body.strategy,
       

    });
    console.log(team);

    // Save the new coach in the db and returns it
    team
        .save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            // Error message
            res.status(500).send({
                message: err.message || 'Cannot create a new team.'
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
    Strategie.findOneAndDelete({'name': req.body.name})
        .then(team => {
            // if not found : error message
            if (!team) {
                return res.status(404).send({
                    message: 'player not found'
                });
            }
            //if found : return a message
            res.send({ message: `team ${req.body.name} deleted` });
        });
};

