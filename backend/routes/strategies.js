var express = require('express');
var router = express.Router();
var strategie = require('../controllers/strategie.controller');

// call function findAll in strategie.controller
router.get('/', strategie.findAll);

module.exports = router;