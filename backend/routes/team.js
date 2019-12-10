var express = require('express');
var router = express.Router();
var coach = require('../controllers/team.controller');

// call function getPlayersForTeam in team.controller
router.get('/getPlayersForTeam', coach.getPlayersForTeam);

// call function getTeamById in team.controller
router.get('/getTeamById', coach.getTeamById);

// call function createTeam in team.controller
router.post('/createTeam', coach.createTeam);



module.exports = router;