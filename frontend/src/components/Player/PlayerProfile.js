import React from "react";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import {Typography} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions/CardActions";

import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";


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
                        <Card>
                            <CardMedia> <Avatar alt="Player's profile icons" src="/img/image-placeholder.png" style={{
                                width: 90,
                                height: 90
                            }}/></CardMedia>
                            <CardContent>
                                <Typography color="textPrimary" gutterBottom>
                                    Current Season: {this.state.gameSeason}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {this.state.player.playerName}
                                </Typography>
                                <Typography variant="body2" component={"p"}>
                                    Account Level: {this.state.account.accountLevel}
                                    <br/>
                                    Rating: {this.state.player.playerRating}
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
                            <CardMedia> <Avatar alt="Player's profile icons" src="/img/image-placeholder.png" style={{
                                width: 90,
                                height: 90
                            }}/></CardMedia>
                            <CardContent>
                                <Typography color="textPrimary" gutterBottom>
                                    Current Season: {this.state.gameSeason}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {this.state.player.playerName}
                                </Typography>
                                <Typography variant="body2" component={"p"}>
                                    Account Level: {this.state.account.accountLevel}
                                    <br/>
                                    Rating: {this.state.player.playerRating}
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
                        <CardMedia> <Avatar alt="Player's profile icons" src="/img/image-placeholder.png" style={{
                            width: 90,
                            height: 90
                        }}/></CardMedia>
                        <CardContent>
                            <Typography color="textPrimary" gutterBottom>
                                Current Season: {this.state.gameSeason}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {this.state.player.playerName}
                            </Typography>
                            <Typography variant="body2" component={"p"}>
                                Account Level: {this.state.account.accountLevel}
                                <br/>
                                Rating: {this.state.player.playerRating}
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