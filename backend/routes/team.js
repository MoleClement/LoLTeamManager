var express = require('express');
var router = express.Router();
var team = require('../controllers/team.controller');

// call function getPlayersForTeam in team.controller
router.get('/getPlayersForTeam', team.getPlayersForTeam);

// call function getTeamById in team.controller
router.get('/getTeamById', team.getTeamById);

// call function createTeam in team.controller
router.post('/', team.createTeam);

// call function updateTeamPractices in team.controller
router.put('/updateTeamPractices', team.updateTeamPractices);
router.put('/addPlayerToTeam', team.addPlayerToTeam);
router.put('/deletePlayerFromTeam', team.deletePlayerFromTeam);


module.exports = router;