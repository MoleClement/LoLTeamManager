import * as React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import withStyles from "@material-ui/core/styles/withStyles";
import ApiLTM from "../Apis/ApiLTM";

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);


export default class Team extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            teamId: props.teamId,
            playersId: [],
            players: []
        }
        /*       players: [{
                   name: "",
                   _id: "",
                   role: "",
                   masteredChampions: [],
                   toTrainChampions: [],
                   dislikedChampions: []
               }]*/
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
                    console.log(players);
                    this.setState({players: players});
                }).catch(onerror => {
                });

            });


        }).then()
            .catch(onerror => {
            });


        ///    this.state.playersId.map(player => {

        /// console.log(player);


        // });
    }

    render() {

        return (
            <div style={{
                width: '100%'
            }}>
                <Paper style={{
                    width: '100%',
                    overflowX: 'auto'
                }}>
                    <Table style={{minWidth: 650}} size="small" aria-label="a dense table">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell>Player</StyledTableCell>
                                <StyledTableCell align="right">Role</StyledTableCell>
                                <StyledTableCell align="right" style={{overflowY: 'auto'}}>Mastered
                                    Champion</StyledTableCell>
                                <StyledTableCell align="right" style={{overflowY: 'auto'}}>To Train
                                    Champion</StyledTableCell>
                                <StyledTableCell align="right" style={{overflowY: 'auto'}}>Disliked
                                    Champion</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.players.map(row => (
                                <StyledTableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.role}</TableCell>
                                    <TableCell align="right">{row.masteredChampions.map((champion, index) => {
                                        if (row.masteredChampions.length > 1 && index !== row.masteredChampions.length - 1)
                                            return (champion + ", ");
                                        else return (champion);
                                    })}</TableCell>
                                    <TableCell align="right">{row.toTrainChampions.map((champion, index) => {
                                        if (row.toTrainChampions.length > 1 && index !== row.toTrainChampions.length - 1)
                                            return (champion + ", ");
                                        else return (champion);
                                    })}</TableCell>
                                    <TableCell align="right">{row.dislikedChampions.map((champion, index) => {
                                        if (row.dislikedChampions.length > 1 && index !== row.dislikedChampions.length - 1)
                                            return (champion + ", ");
                                        else return (champion);
                                    })}</TableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}
