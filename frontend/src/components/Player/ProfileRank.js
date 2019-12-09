import React from "react";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import {Typography} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import IconShape from "../Shape/IconShape";

const bull = <span className={"bullet"}>•</span>;

export default class ProfileRank extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rank: {
                rank: this.props.rank,
                rankIcon: this.props.rankIcon,
                rankLP: this.props.rankLP,
                rankWinRate: this.props.rankWinRate,
                rankQueue: this.props.rankQueue
            },
            result: {
                winNumber: this.props.winNumber,
                loseNumber: this.props.loseNumber
            },
            hasRank: this.props.hasRank
        };
    }

    componentDidMount() {

    }

    render() {
        if (this.state.hasRank) {
            return (
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={2}/>
                    <Grid item xs>
                        <IconShape big/>
                    </Grid>
                    <Grid
                        container xs
                        direction="column"
                        justify="center"
                        alignItems="flex-start"
                    >
                        <Typography color="textPrimary" variant={"body2"} gutterBottom>
                            {this.state.rank.rankQueue}
                        </Typography>
                        <Typography variant="h5" component="h2" gutterBottom>
                            {this.state.rank.rank}
                        </Typography>
                        <Typography variant="body2" component={"p"} gutterBottom>
                            {this.state.rank.rankLP} LP: {bull} {this.state.result.winNumber}
                            <span> Win </span> {this.state.result.loseNumber} <span>Lose</span>
                            <br/>
                            <span>Win Rate: </span> {this.state.rank.rankWinRate}%
                        </Typography>
                    </Grid>
                    <Grid item xs={2}/>
                </Grid>
            );
        } else {
            return (
                <div/>
            );
        }

    }

}

ProfileRank.defaultProps = {
    rank: "Diamond II",
    rankIcon: "rankImg",
    rankLP: "25",
    rankWinRate: "53",
    rankQueue: "Single Queue",
    winNumber: "120",
    loseNumber: "100",
    hasRank: true
}