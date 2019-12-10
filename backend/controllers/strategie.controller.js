const Strategie = require('../models/strategie.model.js');

// Return all the coaches from the db
exports.findAll = (req, res) => {
    Coach.find()
        .then(coaches => {
            console.log(strategies);
            res.send(strategies);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving users.'
            });
        });
};


// Return one coach by its name from the db
exports.findOne = (req, res) => {

    Strategie.findOne({'name': req.body.name})
        .then(strategies => {
            console.log(strategies);
            res.send(strategies);
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
    if (!req.body.name || !req.body.ratio) {
        return res.status(400).send({
            message: 'The name and the ratio of a strategy cannot be empty'
        });
    }

    // Create a new coach
    const strategie = new Strategie({
        name: req.body.name,
        ratio: req.body.ratio,

    });
    console.log(strategie);

    // Save the new coach in the db and returns it
    strategie
        .save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            // Error message
            res.status(500).send({
                message: err.message || 'Cannot create a new strategie.'
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
        .then(coach => {
            // if not found : error message
            if (!strategie) {
                return res.status(404).send({
                    message: 'Strat not found'
                });
            }
            //if found : return a message
            res.send({ message: `Strategie ${req.body.name} deleted` });
        });
};

