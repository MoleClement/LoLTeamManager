const axios = require('axios').default;

// Clé api
const API_KEY = "RGAPI-00265207-e01c-4a0b-aeee-ae268908991a";
// Url API


const API_URL_SUMMONER_BY_ID = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/";

const API_URL_SUMMONER_BY_NAME = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
// Url API
const API_URL_MATCH = "https://euw1.api.riotgames.com/lol/match/v4/matchlists/by-account/";
// Url API
const API_URL_CHAMPION = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/";


class API_riot{
    constructor(){
    }
    // Faire la requete à l'API riot summoner
    // Retourne une promise
    fetchSummonerBySummonerId(summonerId){
        return axios
            .get(`${API_URL_SUMMONER_BY_ID}${summonerId}?api_key=${API_KEY}`, {
                crossdomain: true
            })
    }

    fetchSummonerByName(summonerName){
        return axios
            .get(`${API_URL_SUMMONER_BY_NAME}${summonerName}?api_key=${API_KEY}`, {
                crossdomain: true
            })
    }

    fetchMatchByAccountId(accountId){
        return axios
            .get(`${API_URL_MATCH}${accountId}?api_key=${API_KEY}`, {
                crossdomain: true
            })
    }

    fetchChampionSummonerId(summonerId){
        return axios
            .get(`${API_URL_ChAMPION}${summonerId}?api_key=${API_KEY}`, {
                crossdomain: true
            })
    }
}

module.exports = API_riot;