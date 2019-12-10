var express = require('express');
var router = express.Router();
var team = require('../controllers/team.controller');

// call function findAll in team.controller
router.get('/', team.findAll);

module.exports = router;