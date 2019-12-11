import * as React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import withStyles from "@material-ui/core/styles/withStyles";
import ApiLTM from "../Apis/ApiLTM";
import MaterialTable from "material-table";

export default class Team extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teamId: props.teamId,
            playersId: [],
            players: []
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.teamId !== this.props.teamId) {
            this.setState({teamId: this.props.teamId});
            this.getData();
        }
    }

    componentDidMount() {
        this.getData();
    }

    onDeletePlayer(playerId) {
        const apiLTM = new ApiLTM();
        const apiLTM2 = new ApiLTM();
        apiLTM.deletePlayerFromTeam(playerId, this.state.teamId).then(() => {
            apiLTM2.deletePlayer(playerId);
        }).catch();
    }

    onUpdatePlayer(player) {
        const apiLTM = new ApiLTM();
        apiLTM.updatePlayer(player).then().catch()
    }

    onCreatePlayer(newPlayer) {

        const apiLTM = new ApiLTM();
        const apiLTM2 = new ApiLTM();
        apiLTM.createPlayer(newPlayer).then(response => {

            apiLTM2.addPlayerToTeam(response.data._id, this.state.teamId);
        }).catch();

    }

    getData() {
        const apiLTM = new ApiLTM();
        const apiLTM2 = new ApiLTM();

        apiLTM.getPlayersForTeam(this.state.teamId).then(response => {

            this.setState({
                playersId: response.data
            });

            let players = [];
            this.state.playersId.map(player => {

                apiLTM2.getPlayerById(player).then(response => {

                        players.push({
                            name: response.data.name,
                            _id: response.data._id,
                            role: response.data.role,
                            masteredChampions: response.data.masteredChampions,
                            toTrainChampions: response.data.toTrainChampions,
                            dislikedChampions: response.data.dislikedChampions
                        });
                    }
                ).then(() => {
                    this.setState({players: players});
                }).catch(onerror => {
                });

            });
        }).then()
            .catch(onerror => {
            });
    }

    render() {

        const columns = [
            {title: 'Player', field: 'name'},
            {
                title: 'Role',
                field: 'role',
                lookup: {'Mid': 'Mid', 'Jungle': 'Jungle', 'Top': 'Top', 'ADC': 'ADC', 'Support': 'Support'}
            },
            {
                title: 'Mastered Champions',
                field: 'masteredChampions'
            },
            {
                title: 'To Train Champions',
                field: 'toTrainChampions'
            }
            ,
            {
                title: 'Disliked Champions',
                field: 'dislikedChampions'
            },
        ];

        return (
            <MaterialTable
                options={{
                    pageSizeOptions: []
                }}
                title="Team Players"
                columns={columns}
                data={this.state.players}
                editable={{
                    onRowAdd: newPlayer =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                this.setState(prevState => {
                                    const players = [...prevState.players];
                                    this.onCreatePlayer(newPlayer);
                                    players.push(newPlayer);
                                    return {...prevState, players};
                                });
                            }, 600);
                        }),
                    onRowUpdate: (newPlayer, oldPlayer) =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                if (oldPlayer) {
                                    this.setState(prevState => {
                                        const players = [...prevState.players];
                                        this.onUpdatePlayer(newPlayer);
                                        players[players.indexOf(oldPlayer)] = newPlayer;
                                        return {...prevState, players};
                                    });
                                }
                            }, 600);
                        }),
                    onRowDelete: oldPlayer =>
                        new Promise(resolve => {
                            setTimeout(() => {
                                resolve();
                                this.setState(prevState => {
                                    const players = [...prevState.players];
                                    this.onDeletePlayer(oldPlayer._id);
                                    players.splice(players.indexOf(oldPlayer), 1);
                                    return {...prevState, players};
                                });
                            }, 600);
                        }),
                }}
            />);
    }


}
