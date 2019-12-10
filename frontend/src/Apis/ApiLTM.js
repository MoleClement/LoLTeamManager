let axios = require('axios');

const API_URL = "http://localhost:3000/";
const API_KEY_PLAYER = "player";
const API_KEY_COACH = "coach";
const API_KEY_MATCH = "match";
const API_KEY_TEAM = "team";

class ApiLTM {
    constructor() {
    }

    // Request to RIOT API

    ///Return profile details
    getPlayerProfile(playerId) {
        return axios
            .get(`${API_URL}${API_KEY_MOVIES}/${movieID}`);
    }

    getPlayerRank(playerId) {
        return axios
            .get(`${API_URL}${API_KEY_MOVIES}/${movieID}`);
    }

    getPlayerRankTFT(playerId) {
        return axios
            .get(`${API_URL}${API_KEY_MOVIES}/${movieID}`);
    }

    getPlayerRankFlex(playerId) {
        return axios
            .get(`${API_URL}${API_KEY_MOVIES}/${movieID}`);
    }

    getPlayerWinRatio(playerId) {
        return axios
            .get(`${API_URL}${API_KEY_MOVIES}/${movieID}`);
    }

    getPlayerStatisticChampions(playerId) {
        return axios
            .get(`${API_URL}${API_KEY_MOVIES}/${movieID}`);
    }

    getPlayerWinRate(playerId) {
        return axios
            .get(`${API_URL}${API_KEY_MOVIES}/${movieID}`);
    }


    getMatchList(playerId) {
        return axios
            .get(`${API_URL}${API_KEY_MOVIES}/${movieID}`);
    }

    getMatchResult(matchId) {
        return axios
            .get(`${API_URL}${API_KEY_MOVIES}/${movieID}`);
    }


    // Request to DATABASE

    /// !!!!!! GET !!!!!!!

    // Return all coaches
    getCoaches() {
        return axios
            .get(`${API_URL}${API_KEY_MOVIES}/`);
    }

    // Return coach by ID
    getCoachById(coachId) {
        return axios
            .get(`${API_URL}${API_KEY_MOVIES}/${movieID}`);
    }

    // Return coach by name
    getCoachByName(coachName) {
        return axios
            .get(`${API_URL}${API_KEY_MOVIES}/${movieID}`);
    }

    // Return players for team
    getPlayersForTeam(teamId) {
        return axios
            .get(`${API_URL}${API_KEY_MOVIES}/${movieID}`);
    }

    // Return player by ID
    getPlayerById(playerId) {
        return axios
            .get(`${API_URL}${API_KEY_MOVIES}/${movieID}`);
    }

    // Return player by name
    getPlayerByName(playerName) {
        return axios
            .get(`${API_URL}${API_KEY_MOVIES}/${movieID}`);
    }

    // Return teams
    getTeamsForCoach(coachId) {
        return axios
            .get(`${API_URL}${API_KEY_MOVIES}/${movieID}`);
    }

    // Return team by ID
    getTeamById(teamId) {
        return axios
            .get(`${API_URL}${API_KEY_MOVIES}/${movieID}`);
    }

    // Return team by name
    getTeamByName(teamName) {
        return axios
            .get(`${API_URL}${API_KEY_MOVIES}/${movieID}`);
    }

    /// !!!!!! CREATE !!!!!!!

    /// Create a team
    createTeam(teamName) {
        return axios
            .post(`${API_URL}${API_KEY_MOVIES}/`, {movieTitle: movieTitle});
    }

    /// Create coach
    createCoach(coachName) {
        return axios
            .post(`${API_URL}${API_KEY_MOVIES}/`, {movieTitle: movieTitle});
    }

    /// Create player
    createPlayer(coachName) {
        return axios
            .post(`${API_URL}${API_KEY_MOVIES}/`, {movieTitle: movieTitle});
    }

    /// !!!!!! UPDATE !!!!!!!

    /// Add a team to a coach
    addTeamToCoach(coachId, teamId) {
        return axios
            .put(`${API_URL}${API_KEY_MOVIES}/`, {movieTitle: movieTitle});
    }

    /// Add a player to a team
    addPlayerToTeam(playerId, teamId) {
        return axios
            .put(`${API_URL}${API_KEY_MOVIES}/`, {movieTitle: movieTitle});
    }

    /// updatePlayerChampions
    updatePlayerChampions(playerId, champions) {
        return axios
            .put(`${API_URL}${API_KEY_MOVIES}/`, {movieTitle: movieTitle});
    }

    /// updatePlayerRole
    updatePlayerRole(playerId, role) {
        return axios
            .put(`${API_URL}${API_KEY_MOVIES}/`, {movieTitle: movieTitle});
    }

    /// Update player name
    updatePlayerName(playerId, playerName) {
        return axios
            .put(`${API_URL}${API_KEY_MOVIES}/`, {movieTitle: movieTitle});
    }

    /// Update team practices
    updateTeamPractices(teamId, practices) {
        return axios
            .put(`${API_URL}${API_KEY_MOVIES}/`, {movieTitle: movieTitle});
    }

    /// !!!!!! DELETE !!!!!!!

    /// !!!!!!! COACHES !!!!!!!

    /*    /// Delete all the coaches from the database
        deleteCoaches() {

            return axios
                .delete(`${API_URL}${API_KEY_COACH}/`);
        }*/

    /*
        /// Delete specified coach from the database
        deleteCoachById(id) {
            return axios
                .delete(`${API_URL}${API_KEY_COACH}/${id}`);
        }
    */

    /// !!!!!!! TEAMS !!!!!!!

    /*
        /// DELETE ALL TEAMS
        deleteTeam() {
            return axios
                .delete(`${API_URL}${API_KEY_PLAYER}/`);
        }
    */

    /// Delete teams for a coach from the database
    deleteTeamFromCoach(coachId) {

        return axios
            .delete(`${API_URL}${API_KEY_PLAYER}/`);
    }

    /// Delete specified team for a coach from the database
    deleteTeamByIdFromCoach(coachId, playerId) {
        return axios
            .delete(`${API_URL}${API_KEY_COACH}/${id}`);
    }

    /// !!!!!!! PLAYERS !!!!!!!
    /*

        /// DELETE ALL PLAYERS
        deletePlayers() {
            return axios
                .delete(`${API_URL}${API_KEY_PLAYER}/`);
        }
    */

    /*
        /// Delete all the player for a team from the database
        deletePlayersFromTeam(teamId) {

            return axios
                .delete(`${API_URL}${API_KEY_PLAYER}/`);
        }
    */

    /// Delete specified player for a team from the database
    deletePlayerByIdFromTeam(teamId, playerId) {
        return axios
            .delete(`${API_URL}${API_KEY_COACH}/${id}`);
    }

    /// !!!!!!! CHAMPIONS !!!!!!!
    /*

        /// DELETE ALL ROLES
        deleteRoles() {
            return axios
                .delete(`${API_URL}${API_KEY_PLAYER}/`);
        }
    */

    /*
        /// Delete players role from a team
        deletePlayersRoleFromTeam(teamId, playerId) {

            return axios
                .delete(`${API_URL}${API_KEY_PLAYER}/`);
        }
    */

    /// Delete role from player by id
    deletePlayerRoleById(playerId) {

        return axios
            .delete(`${API_URL}${API_KEY_PLAYER}/`);
    }

    /// !!!!!!! CHAMPIONS !!!!!!!
    /*

        /// DELETE ALL CHAMPIONS
        deleteChampions() {
            return axios
                .delete(`${API_URL}${API_KEY_PLAYER}/`);
        }
    */

    /// Delete all champions for a player from the database
    deleteChampionsFromPlayer(playerId) {
        return axios
            .delete(`${API_URL}${API_KEY_COACH}/${id}`);
    }

    /// Delete all mastered champions for a player from the database
    deleteMasteredChampionsFromPlayer(playerId) {
        return axios
            .delete(`${API_URL}${API_KEY_COACH}/${id}`);
    }

    /// Delete specified mastered champion for a player from the database
    deleteMasteredChampionsByIdFromPlayer(playerId, champion) {
        return axios
            .delete(`${API_URL}${API_KEY_COACH}/${id}`);
    }

    /// Delete all disliked champions for a player from the database
    deleteDislikedChampionsFromPlayer(playerId) {
        return axios
            .delete(`${API_URL}${API_KEY_COACH}/${id}`);
    }

    /*
        /// Delete specified disliked champion for a player from the database
        deleteDislikedChampionsByIdFromPlayer(playerId, champion) {
            return axios
                .delete(`${API_URL}${API_KEY_COACH}/${id}`);
        }

        /// Delete all champions to train for a player from the database
        deleteToTrainChampionsFromPlayer(playerId) {
            return axios
                .delete(`${API_URL}${API_KEY_COACH}/${id}`);
        }

        /// Delete specified champion to train for a player from the database
        deleteToTrainChampionsByIdFromPlayer(playerId, champion) {
            return axios
                .delete(`${API_URL}${API_KEY_COACH}/${id}`);
        }*/


    /// !!!!!!! TRAINING !!!!!!!
    /*

        /// DELETE ALL TRAINING DATA
        deleteTrainingData() {
            return axios
                .delete(`${API_URL}${API_KEY_PLAYER}/`);
        }

        /// Delete training data for a team from the database
        deleteTrainingDataFromTeam(teamId) {
            return axios
                .delete(`${API_URL}${API_KEY_COACH}/${id}`);
        }

        /// Delete training data for a day for a team from the database
        deleteTrainingDataByDayFromTeam(teamId, dayId) {
            return axios
                .delete(`${API_URL}${API_KEY_COACH}/${id}`);
        }
    */

    /// !!!!!!! STRATEGIES !!!!!!!
    /*

        /// DELETE ALL STRATEGIES DATA
        deleteStrategiesData() {
            return axios
                .delete(`${API_URL}${API_KEY_PLAYER}/`);
        }

        /// Delete strategies data for a coach from the database
        deleteStrategiesDataFromCoach(coachId) {
            return axios
                .delete(`${API_URL}${API_KEY_COACH}/${id}`);
        }

        /// Delete strategies data for a team from the database
        deleteStrategiesDataFromTeam(teamId) {
            return axios
                .delete(`${API_URL}${API_KEY_COACH}/${id}`);
        }

        /// Delete strategies data by id for a team from the database
        deleteTrainingDataByIdFromTeam(teamId, strategyId) {
            return axios
                .delete(`${API_URL}${API_KEY_COACH}/${id}`);
        }
    */

}

export default ApiLTM;