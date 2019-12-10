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

export default class PlayerProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            player: {
                playerId: props.playerId,
                playerName: props.playerName,
                playerRating: props.playerRating,
            },
            account: {
                accountId: props.id,
                accountIcon: props.accountIcon,
                accountLevel: props.accountLevel
            },
            isConnected: props.isConnected,
            isInGame: props.isInGame,
            gameSeason: props.gameSeason
        };
    }

    getData() {

    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        if (prevProps.playerId !== this.props.playerId) {
            this.getData();
        }
    }

    componentDidMount(): void {
        this.getData();
    }

    render() {
        if (this.state.account.accountId) {
            return (
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs>
                        <IconShape big/>
                    </Grid>
                    <Grid item xs>
                        <Typography color="textPrimary" variant={"body2"} gutterBottom>
                            {this.state.gameSeason}
                        </Typography>
                        <Typography variant="h5" component="h2" gutterBottom>
                            {this.state.player.playerName}
                        </Typography>
                        <Typography variant="body2" component={"p"} gutterBottom>
                            <span> Account Level:</span>{this.state.account.accountLevel}
                        </Typography>
                        <Typography variant="body2" component={"p"} gutterBottom>
                            <span> Rating:</span> {this.state.player.playerRating}
                        </Typography>
                    </Grid>
                </Grid>
            );
        } else {
            return (
                <div>Player doest not exist</div>
            );
        }
    }
}

PlayerProfile.defaultProps = {

    playerName: "Feengh",
    playerRating: "12,521 (0.08%)",
    id: 10,
    accountIcon: "",
    accountLevel: "188",
    isConnected: false,
    isInGame: false,
    gameSeason: "Profile season 10"

};