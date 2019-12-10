var express = require('express');
var router = express.Router();
var coach = require('../controllers/coach.controller');

// call function findOne in coach.controller
router.get('/', coach.findOne);

// call function create in coach.controller
router.put('/', coach.create);

// call function update in coach.controller
/*router.post('/', coach.update);*/

// call function delete in coach.controller
router.delete('/', coach.delete);

module.exports = router;