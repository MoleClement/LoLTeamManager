var express = require('express');
var router = express.Router();
var coach = require('../controllers/coach.controller');

// call function findOne in coach.controller
router.get('/byName', coach.findOne);

// call function findOne in coach.controller
router.get('/byId', coach.findById);

// call function create in coach.controller
router.post('/', coach.create);

// call function update in coach.controller
router.put('/', coach.update);

// call function delete in coach.controller
router.delete('/', coach.delete);

// call function findOne in coach.controller
router.get('/getTeamsForCoach', coach.getTeamsForCoach);

// call function delete in coach.controller
router.put('/addTeamToCoach', coach.addTeamToCoach);

// call function delete in coach.controller
router.put('/deleteTeamFromCoach', coach.deleteTeamFromCoach);


router.put('/deleteTeamByIdFromCoach', coach.deleteTeamByIdFromCoach);

module.exports = router;