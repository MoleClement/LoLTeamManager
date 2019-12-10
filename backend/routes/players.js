var express = require('express');
var router = express.Router();
var player = require('../controllers/player.controller');

// call function findAll in strategie.controller
router.get('/', player.findAll);

module.exports = router;