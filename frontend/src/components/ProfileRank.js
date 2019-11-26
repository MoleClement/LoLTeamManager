import React from "react";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import {Typography} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";

const bull = <span className={"bullet"}>•</span>;

export default class ProfileRank extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rank: {
                rank: "rank",
                rankImg: "rankImg",
                rankLP: "playerLP",
                rankWinRate: "rankWinRate",
                rankQueue: this.props.queue
            },
            result: {
                winNumber: "0",
                lossNumber: "0"
            },
            hasRank: this.props.hasRank
        };
    }

    componentDidMount() {

    }

    render() {
        if (this.state.hasRank) {
            return (
                <Card>
                    <CardMedia>
                        <Avatar alt="Rank's icon" src="/img/image-placeholder.png" style={{
                            width: 90,
                            height: 90
                        }}/>
                    </CardMedia>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>
                            {this.state.rank.rankQueue}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {this.state.rank.rank}
                        </Typography>
                        <Typography variant="body2" component={"p"}>
                            {this.state.rank.rankLP} <span>LP</span> {bull} {this.state.result.winNumber}
                            <span>Win</span> {this.state.result.lossNumber} <span>Lose</span>
                            <br/>
                            <span>Win Rate: </span> {this.state.rank.rankWinRate}
                        </Typography>
                    </CardContent>
                </Card>
            );
        } else {
            return (
                <Card>
                    <CardMedia>
                        <Avatar alt="Rank's icon" src="/img/image-placeholder.png" style={{
                            width: 90,
                            height: 90
                        }}/>
                    </CardMedia>
                    <CardContent>
                        <Typography color="textPrimary" gutterBottom>
                            {this.state.rank.rankQueue}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            Rank: N/A
                        </Typography>
                        <Typography variant="body2" component={"p"}>
                            LP: N/A {bull} {this.state.result.winNumber}
                            <span>Win</span> {this.state.result.lossNumber} <span>Lose</span>
                            <br/>
                            <span>Win Rate: </span> {this.state.rank.rankWinRate}
                        </Typography>
                    </CardContent>
                </Card>
            );
        }

    }

}