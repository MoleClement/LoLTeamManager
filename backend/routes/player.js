var express = require('express');
var router = express.Router();
var player = require('../controllers/player.controller');

// call function findOne in player.controller
router.get('/', player.findById);

// call function create in player.controller
router.post('/', player.create);

// call function update in player.controller
router.put('/', player.update);

// call function delete in player.controller
router.delete('/', player.delete);

module.exports = router;