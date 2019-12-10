var express = require('express');
var router = express.Router();
var team = require('../controllers/team.controller');

// call function findOne in strategie.controller
router.get('/', team.findOne);

// call function create in strategie.controller
router.put('/', team.create);

// call function update in strategie.controller
/*router.post('/', coach.update);*/

// call function delete in strategie.controller
router.delete('/', team.delete);

module.exports = router;