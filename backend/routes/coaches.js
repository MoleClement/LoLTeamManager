var express = require('express');
var router = express.Router();
var coach = require('../controllers/coach.controller');

// call function findAll in coach.controller
router.get('/', coach.findAll);

module.exports = router;