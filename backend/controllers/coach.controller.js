const Coach = require('../models/coach.model.js');

// Return all the coaches from the db
exports.findAll = (req, res) => {
    Coach.find()
        .then(coaches => {
            console.log(coaches);
            res.send(coaches);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Cannot find coaches'
            });
        });
};


// Return one coach by its name from the db
exports.findOne = (req, res) => {
    // Request all the information required in collection coach
    if (!req.body.name) {
        return res.status(400).send({
            message: 'Need name data'
        });
    }

    Coach.findOne({'name': req.body.name})
        .then(coach => {
            console.log(coach);
            res.send(coach);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Cannot find coach ${req.body.name}`
            });
        });
};

// Return one coach by its id from the db
exports.findById = (req, res) => {
    // Request all the information required in collection coach
    if (!req.body.coachId) {
        return res.status(400).send({
            message: 'Need coachId data'
        });
    }

    Coach.findById(req.body.coachId)
        .then(coach => {
            console.log(coach);
            res.send(coach);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Cannot find coach with id ${req.body.coachId}`
            });
        });
};


// Create a new coach in the db
exports.create = (req, res) => {
    /*console.log(req.body);*/
    // Request all the information required in collection coach
    if (!req.body.name || !req.body.teams) {
        return res.status(400).send({
            message: 'Need name and teams data'
        });
    }

    // Create a new coach
    const coach = new Coach({
        name: req.body.name,
        teams: req.body.teams
    });
    console.log(coach);

    // Save the new coach in the db and returns it
    coach.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            // Error message
            res.status(500).send({
                message: err.message || 'Cannot create a new coach.'
            });
        });
};


// Delete a User with the specified UserId in the request
exports.delete = (req, res) => {
    Coach.findByIdAndDelete(req.body.coachId)
        .then(coach => {
            if (!coach) {
                return res.status(404).send({
                    message: `Coach with id ${req.body.coachId} not found`
                });
            }
            res.send({ message: `Coach with id ${req.body.coachId} deleted` });
        })
};

/*// delete a coach by its name
exports.delete = (req, res) => {
    // find the coach
    Coach.findOneAndDelete({'name': req.body.name})
        .then(coach => {
            // if not found : error message
            if (!coach) {
                return res.status(404).send({
                    message: 'Coach not found'
                });
            }
            //if found : return a message
            res.send({ message: `Coach ${req.body.name} deleted` });
        });
};*/

// update a coach by its name
exports.update = (req, res) => {

    // Request all the information required in collection coach
    if (!req.body.name || !req.body.teams) {
        return res.status(400).send({
            message: 'Need name and teams data'
        });
    }
    else {
        const filter = {name: req.body.name};
        const updateTeams = {teams: req.body.teams};

        if (updateTeams) {
            // find the coach
            Coach.findOneAndUpdate(filter, updateTeams)
                .then(coach => {
                    // if not found : error message
                    if (!coach) {
                        return res.status(404).send({
                            message: 'Coach not found'
                        });
                    }
                    //if found : return a message
                    res.send({message: `Coach ${req.body.name} updated`});
                });
        }
    }
};

// add a team to a coach by its id
exports.addTeamtoCoach = (req, res) => {
    // Request all the information required in collection coach
    if (!req.body.coachId || !req.body.teamId) {
        return res.status(400).send({
            message: 'Need coachId and teamId data'
        });
    }

    Coach.findById(req.body.coachId)
        .then(coach => {
            console.log(coach.teams);
            coach.teams.push(req.body.teamId);
            console.log(coach.teams);
            res.send(coach);
            coach.save();
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Cannot find coach with id ${req.body.coachId}`
            });
        });
};


// delete a team to a coach by its id
exports.deleteTeamFromCoach = (req, res) => {
    // Request all the information required in collection coach
    if (!req.body.coachId) {
        return res.status(400).send({
            message: 'Need coachId data'
        });
    }

    Coach.findById(req.body.coachId)
        .then(coach => {
            coach.teams.length = [];
            console.log(coach.teams);
            res.send(coach);
            coach.save();
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Cannot find coach with id ${req.body.coachId}`
            });
        });
};

// delete a team to a coach by its id
exports.deleteTeamByIdFromCoach = (req, res) => {
    // Request all the information required in collection coach
    if (!req.body.coachId || !req.body.teamId) {
        return res.status(400).send({
            message: 'Need coachId and teamId data'
        });
    }

    if (req.body.coachId && req.body.teamId) {
        Coach.findById(req.body.coachId)
            .then(coach => {
                coach.teams.remove(req.body.teamId);
                console.log(coach.teams);
                res.send(coach);
                coach.save();
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || `Cannot find coach with id ${req.body.coachId}`
                });
            });
    }
};


// Return one coach by its id from the db
exports.getTeamsForCoach = (req, res) => {
    // Request all the information required in collection coach
    if (!req.body.coachId) {
        return res.status(400).send({
            message: 'Need coachId data'
        });
    }

    Coach.findById(req.body.coachId)
        .then(coach => {
            console.log(coach.teams);
            res.send(coach.teams);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || `Cannot find coach with id ${req.body.coachId}`
            });
        });
};