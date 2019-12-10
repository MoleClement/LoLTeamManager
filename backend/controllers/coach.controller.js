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
                message: err.message || 'Some error occurred while retrieving users.'
            });
        });
};


// Return one coach by its name from the db
exports.findOne = (req, res) => {

    Coach.findOne({'name': req.body.name})
        .then(coaches => {
            console.log(coaches);
            res.send(coaches);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving users.'
            });
        });

};


// Create a new coach in the db
exports.create = (req, res) => {
    /*console.log(req.body);*/
    // Request all the informations required in collection coach
    if (!req.body.name || !req.body.nbTeams || !req.body.teams) {
        return res.status(400).send({
            message: 'The name, the nbTeams and the teams of a coach cannot be empty'
        });
    }

    // Create a new coach
    const coach = new Coach({
        name: req.body.name,
        nbTeams: req.body.nbTeams,
        teams: req.body.teams
    });
    console.log(coach);

    // Save the new coach in the db and returns it
    coach
        .save()
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
};

