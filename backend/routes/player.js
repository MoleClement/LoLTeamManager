var express = require('express');
var router = express.Router();
var player = require('../controllers/player.controller');

// call function findOne in strategie.controller
router.get('/', player.findOne);

// call function create in strategie.controller
router.put('/', player.create);

// call function update in strategie.controller
/*router.post('/', coach.update);*/

// call function delete in strategie.controller
router.delete('/', player.delete);

module.exports = router;