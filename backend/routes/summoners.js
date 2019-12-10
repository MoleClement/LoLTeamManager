let express = require('express');
let router = express.Router();
const _ = require('lodash');
const API_riot = require('../public/javascripts/API_riot');


/* GET movie by Name */
router.get('/name/:name', function (req, res) {
    let riotAPI = new API_riot();
    const name = req.params.name;

    if (req.params.length > 0)
        res.status(404).json({
            message: `name: ${name}`
        });

    if(name){
        riotAPI.fetchSummonerByName(name).then(function (response) {
            // Get data from the API
            const data = response.data;

            const id = data.id;
            const accountId = data.accountId;
            const puuid = data.puuid;
            const name = data.name;
            const profileIconId = data.profileIconId;
            const revisionDate = data.revisionDate;
            const summonerLevel = data.summonerLevel;

            // Get the main data
            res.status(200).json({
                summoner: [
                    {
                        message: 'Summoner found',
                        id: id,
                        accountId: accountId,
                        puuid: puuid,
                        name: name,
                        profileIconId: profileIconId,
                        revisionDate: revisionDate,
                        summonerLevel: summonerLevel
                    }]
            });
        })
    }
    else {
        res.status(404).json({
            message: 'ID tag parameter can not be empty! Please refer an id in the request'
        });
    }

});


/* GET movie by ID */
router.get('/id/:id', function (req, res) {
    let riotAPI = new API_riot();
    const id = req.params.id;

    if (req.params.length > 0)
        res.status(404).json({
            message: `id: ${id}`
        });

    if(id){
        riotAPI.fetchSummonerBySummonerId(id).then(function (response) {
            // Get data from the API
            const data = response.data;

            const id = data.id;
            const accountId = data.accountId;
            const puuid = data.puuid;
            const name = data.name;
            const profileIconId = data.profileIconId;
            const revisionDate = data.revisionDate;
            const summonerLevel = data.summonerLevel;

            // Get the main data
            res.status(200).json({
                summoner: [
                    {
                        message: 'Summoner found',
                        id: id,
                        accountId: accountId,
                        puuid: puuid,
                        name: name,
                        profileIconId: profileIconId,
                        revisionDate: revisionDate,
                        summonerLevel: summonerLevel
                    }]
            });
        })
    }
    else {
        res.status(404).json({
            message: 'ID tag parameter can not be empty! Please refer an id in the request'
        });
    }

});


module.exports = router;