import * as React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import withStyles from "@material-ui/core/styles/withStyles";

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
            teamName: props.teamName,
            players: props.players
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
            if(prevProps.teamId !== this.props.teamId)
            {
                this.getData();
            }
    }

    getData(){
        this.setState({
            players: [
            {
                playerName: "Foo",
                playerId: "id",
                role: "top",
                mastered: ["Test", "Test"],
                toTrain: ["Test", "Test"],
                disliked: ["Test"]
            },
            {
                playerName: "Jane",
                playerId: "id",
                role: "jungle",
                mastered: ["Shyvana", "Xin Zhao", "Graggas", "Lee Sin"],
                toTrain: ["Nunu", "Kha'Zix"],
                disliked: ["Ivern"]
            },
            {
                playerName: "John",
                playerId: "id",
                role: "mid",
                mastered: ["Qiyana", "Ryze", "Zed"],
                toTrain: ["Cassiopeia"],
                disliked: ["Twisted Fate"]
            },
            {
                playerName: "Do",
                playerId: "id",
                role: "adc",
                mastered: ["Lucian", "Xayah"],
                toTrain: ["Tristana", "Ezreal"],
                disliked: ["Miss Fortune"]
            },
            {
                playerName: "Doe",
                playerId: "id",
                role: "support",
                mastered: ["Zyra", "Velkoz", "Nautilus"],
                toTrain: ["Leona"],
                disliked: ["Yuumi"]
            }
        ]
        })
    }

    componentDidMount() {

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
                                <StyledTableRow key={row.playerName}>
                                    <TableCell component="th" scope="row">
                                        {row.playerName}
                                    </TableCell>
                                    <TableCell align="right">{row.role}</TableCell>
                                    <TableCell align="right">{row.mastered.map((champion, index) => {
                                        if (row.mastered.length > 1 && index !== row.mastered.length - 1)
                                            return (champion + ", ");
                                        else return (champion);
                                    })}</TableCell>
                                    <TableCell align="right">{row.toTrain.map((champion, index) => {
                                        if (row.toTrain.length > 1 && index !== row.toTrain.length - 1)
                                            return (champion + ", ");
                                        else return (champion);
                                    })}</TableCell>
                                    <TableCell align="right">{row.disliked.map((champion, index) => {
                                        if (row.disliked.length > 1 && index !== row.disliked.length - 1)
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

Team.defaultProps = {

    teamName: "NGA B",
    players: [
        {
            playerName: "Shotetsu",
            playerId: "id",
            role: "top",
            mastered: ["Yasuo", "Mordekaiser"],
            toTrain: ["Fiora", "Camille"],
            disliked: ["Sion"]
        },
        {
            playerName: "Feengh",
            playerId: "id",
            role: "jungle",
            mastered: ["Shyvana", "Xin Zhao", "Graggas", "Lee Sin"],
            toTrain: ["Nunu", "Kha'Zix"],
            disliked: ["Ivern"]
        },
        {
            playerName: "Onyx Sly",
            playerId: "id",
            role: "mid",
            mastered: ["Qiyana", "Ryze", "Zed"],
            toTrain: ["Cassiopeia"],
            disliked: ["Twisted Fate"]
        },
        {
            playerName: "Kazenn",
            playerId: "id",
            role: "adc",
            mastered: ["Lucian", "Xayah"],
            toTrain: ["Tristana", "Ezreal"],
            disliked: ["Miss Fortune"]
        },
        {
            playerName: "SmileCookie",
            playerId: "id",
            role: "support",
            mastered: ["Zyra", "Velkoz", "Nautilus"],
            toTrain: ["Leona"],
            disliked: ["Yuumi"]
        }
    ]
};