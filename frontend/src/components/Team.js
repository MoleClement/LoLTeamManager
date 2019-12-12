import * as React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import withStyles from "@material-ui/core/styles/withStyles";
import ApiLTM from "../Apis/ApiLTM";
import MaterialTable from "material-table";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import GridLayout from "react-grid-layout";

export default class Team extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teamId: props.teamId,
            playersId: [],
            players: [],
            isLoading: false,
            error: null
        }
    }

    componentDidMount() {
        this.getData();
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.teamId !== this.props.teamId) {
            this.setState({teamId: this.props.teamId});
            this.getData();
        }
    }

    onDeletePlayer(player) {
        const apiLTM = new ApiLTM();
        const apiLTM2 = new ApiLTM();
        console.log(player._id);
        apiLTM.deletePlayerFromTeam(player._id, this.props.teamId).then(() => {
            console.log(player._id);
            apiLTM2.deletePlayer(player._id);
        }).catch();
    }

    getPlayerId(playerName) {
        const apiLTM = new ApiLTM();
        apiLTM.getPlayerByName(playerName).then(response => {
            return response.data._id;
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

            apiLTM2.addPlayerToTeam(response.data._id, this.props.teamId);
            newPlayer._id = response.data._id;
        }).catch();

    }

    getData() {
        this.setState({isLoading: true});
        const apiLTM = new ApiLTM();
        const apiLTM2 = new ApiLTM();
        let players = [];

        apiLTM.getPlayersForTeam(this.props.teamId).then(response => {

            if (response.data.length === 0)
                this.setState({
                    playersId: []
                });

            this.setState({
                playersId: response.data
            });


            if (response.data.length !== 0)
                response.data.map(player => {
                    apiLTM2.getPlayerById(player).then(response2 => {
                            players.push({
                                name: response2.data.name,
                                _id: response2.data._id,
                                role: response2.data.role,
                                masteredChampions: response2.data.masteredChampions,
                                toTrainChampions: response2.data.toTrainChampions,
                                dislikedChampions: response2.data.dislikedChampions
                            });
                        }
                    ).then(() => {
                        this.setState({players: players, isLoading: false});
                    }).catch(onerror => {
                        this.setState({error: onerror, isLoading: false})
                    });
                });
            else this.setState({players: [], isLoading: false});

        }).catch(onerror => {
            this.setState({isLoading: false, error: onerror})
        });
    }

    render() {

        const columns = [
            {title: "Id", field: '_id', editable: 'never'}
            ,
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

        const {isLoading} = this.state;

        /*    if (isLoading)
                return <div/>;
    */
        return (
            <Card style={{height: '100%', display: "flex", alignItems: "center", justifyContent: "center"}}>
                <CardContent>
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
                                            newPlayer._id = this.getPlayerId(newPlayer.name);
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
                                            this.onDeletePlayer(oldPlayer);
                                            players.splice(players.indexOf(oldPlayer), 1);
                                            return {...prevState, players};
                                        });
                                    }, 600);
                                }),
                        }}
                    />
                </CardContent>
            </Card>);
    }


}
