const Team = require('../models/team.model.js');

// Return one team by its id from the db
exports.getTeamById = (req, res) => {
    // Request all the information required in collection coach
    if (!req.body.teamId) {
        return res.status(400).send({
            message: 'Need teamId data'
        });
    }

    Team.findById(req.body.teamId)
        .then(team => {
            console.log(team);
            res.send(team);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Cannot find team with id ${req.body.teamId}`
            });
        });
};

// Return all the id of players from a team
exports.getPlayersForTeam = (req, res) => {
    // Request all the information required in collection coach
    if (!req.body.teamId) {
        return res.status(400).send({
            message: 'Need teamId data'
        });
    }

    Team.findById(req.body.teamId)
        .then(team => {
            console.log(team.players);
            res.send(team.players);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Cannot find coach with id ${req.body.teamId}`
            });
        });
};

// Create a new team in the db
exports.createTeam = (req, res) => {

    // Request all the information required in collection coach
    if (!req.body.teamName) {
        return res.status(400).send({
            message: 'Need teamName data'
        });
    }

    // Create a new coach
    const team = new Team({
        name: req.body.teamName,
        /*players: req.body.players
        training: ,
        strategy: */
    });
    console.log(team);

    // Save the new team in the db and returns it
    team.save()
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

