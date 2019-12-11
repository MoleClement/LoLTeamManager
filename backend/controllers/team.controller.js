const Team = require('../models/team.model.js');

// Return one team by its id from the db
exports.getTeamById = (req, res) => {
    // Request all the information required in collection coach
    if (!req.query.teamId) {
        return res.status(400).send({
            message: 'Need teamId data'
        });
    }

    Team.findById(req.query.teamId)
        .then(team => {
            console.log(team);
            res.send(team);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Cannot find team with id ${req.query.teamId}`
            });
        });
};


// Return all the id of players from a team
exports.getPlayersForTeam = (req, res) => {
    // Request all the information required in collection coach
    if (!req.query.teamId) {
        return res.status(400).send({
            message: 'Need teamId data'
        });
    }

    Team.findById(req.query.teamId)
        .then(team => {
            console.log(team.players);
            res.send(team.players);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Cannot find coach with id ${req.query.teamId}`
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
        training: {
            "sunday": [
                100,
                200,
                300,
                100
            ],
            "wednesday": [
                0,
                200,
                200,
                100
            ],
            "friday": [
                125,
                300,
                200,
                0
            ],
            "saturday": [
                250,
                250,
                0,
                100
            ]
        },
        practices: {
            "left": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            "right": []
        },
        strategy: [
            {
                name: "Split Push",
                winRate: 75
            },
            {
                name: "Protect the Carry",
                winRate: 90
            },
            {
                name: "Area of Effect",
                winRate: 85
            },
            {
                name: "Swap Lanes",
                "winRate": 55
            },
            {
                name: "Poke",
                winRate: 45
            }
        ]
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

// update a coach by its name
exports.updateTeamPractices = (req, res) => {

    // Request all the information required in collection coach
    if (!req.body.teamId || !req.body.practices) {
        return res.status(400).send({
            message: 'Need teamId and practicesToUpdate data'
        });
    } else {
        const filter = {_id: req.body.teamId};
        const update = {practices: req.body.practices};

        if (update) {
            // find the coach
            Team.findOneAndUpdate(filter, update)
                .then(team => {
                    // if not found : error message
                    if (!team) {
                        return res.status(404).send({
                            message: 'Team not found'
                        });
                    }
                    //if found : return a message
                    res.send({message: `Team updated`});
                });
        }
    }
};

// update a coach by its name
exports.addPlayerToTeam = (req, res) => {

    // Request all the information required in collection coach
    if (!req.body.teamId || !req.body.playerId) {
        return res.status(400).send({
            message: 'Need teamId and player Id data'
        });
    } else {
        // find the coach
        Team.findOneAndUpdate({_id: req.body.teamId}, {$push: {players: req.body.playerId}})
            .then(team => {
                // if not found : error message
                if (!team) {
                    return res.status(404).send({
                        message: 'Team not found'
                    });
                }
                //if found : return a message
                res.send({message: `Team updated`});
            });
    }
};

// delete a player by its name
exports.deletePlayerFromTeam = (req, res) => {

    // Request all the information required in collection coach
    if (!req.body.teamId || !req.body.playerId) {
        return res.status(400).send({
            message: 'Need teamId and player Id data'
        });
    } else {
        // find the coach
        Team.findOneAndUpdate({_id: req.body.teamId}, {$pull: {players: req.body.playerId}})
            .then(team => {
                // if not found : error message
                if (!team) {
                    return res.status(404).send({
                        message: 'Team not found'
                    });
                }
                //if found : return a message
                res.send({message: `Team updated`});
            });
    }
};