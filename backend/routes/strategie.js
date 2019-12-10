var express = require('express');
var router = express.Router();
var strategie = require('../controllers/strategie.controller');

// call function findOne in strategie.controller
router.get('/', strategie.findOne);

// call function create in strategie.controller
router.put('/', strategie.create);

// call function update in strategie.controller
/*router.post('/', coach.update);*/

// call function delete in strategie.controller
router.delete('/', strategie.delete);

module.exports = router;