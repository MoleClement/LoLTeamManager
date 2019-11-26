import React from "react";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import {Typography} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions/CardActions";

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
                <Card className={"card"}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {this.state.player.playerName}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {this.state.player.playerRating}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Typography size="small">
                            Connected {bull} Currently not in game
                        </Typography>
                    </CardActions>
                </Card>
            );
        } else {
            return (
                <div>

                </div>
            );
        }

    }

}