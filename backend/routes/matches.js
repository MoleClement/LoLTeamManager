let express = require('express');
let router = express.Router();
const _ = require('lodash');
const API_riot = require('../public/javascripts/API_riot');

router.get('/accountId/:accountId', function (req, res) {
    let riotAPI = new API_riot();
    const accountId = req.params.accountId;

    if (req.params.length > 0)
        res.status(404).json({
            message: `accountId: ${accountId}`
        });

    if(accountId){
        riotAPI.fetchMatchByAccountId(accountId).then(function (response) {
            // Get data from the API
            const data = response.data;

            /*for(let i = 0; i < data.matches.length; i++)
            {*/
                const totalGame = data.totalGames;
                const platformId = data.matches[0].platformId;
                const gameId = data.matches[0].gameId;
                const champion = data.matches[0].champion;
                const queue = data.matches[0].queue;
                const season = data.matches[0].season;
                const timestamp = data.matches[0].timestamp;
                const role = data.matches[0].role;
                const lane = data.matches[0].lane;

                // Get the main data
                res.status(200).json({
                    match: [
                        {
                            message: 'Match found',
                            totalGame: totalGame,
                            platformId: platformId,
                            gameId: gameId,
                            champion: champion,
                            queue: queue,
                            season: season,
                            timestamp: timestamp,
                            role: role,
                            lane: lane
                        }]
                });
            /*}*/

        })
    }
    else {
        res.status(404).json({
            message: 'ID tag parameter can not be empty! Please refer an id in the request'
        });
    }

});


module.exports = router;