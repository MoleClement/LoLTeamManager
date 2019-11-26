import React from "react";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import {Typography} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions/CardActions";
import makeStyles from "@material-ui/core/styles/makeStyles";

import '../PlayerProfile.css';


const bull = <span className={"bullet"}>•</span>;

export default class PlayerProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            player: {
                playerName: "playerName",
                playerRating: "playerRating",
            },
            account: {
                accountId: this.props.id,
                accountImage: "accountImgUrl",
                accountLevel: "accountLevel"
            },
            isConnected: this.props.isConnected,
            isInGame: this.props.isInGame,
            gameSeason: "10"
        };
    }

    render() {
        if (this.state.account.accountId) {
            if (this.state.isConnected) {
                if (this.state.isInGame) {
                    return (
                        <Card className={"card"}>
                            <CardContent>
                                <Typography color="textPrimary" gutterBottom>
                                    {this.state.gameSeason}
                                </Typography>
                                <Typography variant="h5" component="h2" className={"title"}>
                                    {this.state.player.playerName}
                                </Typography>
                                <Typography variant="body2" className={"pos"}>
                                    {this.state.account.accountLevel}
                                    <br/>
                                    {this.state.player.playerRating}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Typography size="small">
                                    Connected {bull} Currently in game
                                </Typography>
                            </CardActions>
                        </Card>
                    );
                } else {
                    return (
                        <Card>
                            <CardContent>
                                <Typography color="textPrimary" gutterBottom>
                                    {this.state.gameSeason}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {this.state.player.playerName}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {this.state.account.accountLevel}
                                    <br/>
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
                }

            } else {
                return (
                    <Card>
                        <CardContent>
                            <Typography color="textPrimary" gutterBottom>
                                {this.state.gameSeason}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {this.state.player.playerName}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {this.state.account.accountLevel}
                                <br/>
                                {this.state.player.playerRating}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Typography size="small">
                                Not Connected
                            </Typography>
                        </CardActions>
                    </Card>
                );
            }
        } else {
            return (
                <div>Player doest not exist</div>
            );
        }
    }
}