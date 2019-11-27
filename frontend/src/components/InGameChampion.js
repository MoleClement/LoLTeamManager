import React, {Component} from "react";
import Grid from "@material-ui/core/Grid/Grid";
import {Typography} from "@material-ui/core";


export default class InGameChampion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            champion: {
                icon: props.championIcon,
                name: props.championName
            },
            result: {
                played: props.championPlayed,
                winRate: props.championWinRate,
                kda: props.championKDA,
                creepScore: props.creepScore
            }
        };
    }

    render() {
        return (
            <Grid   container
                    direction="row"
                    justify="space-around"
                    alignItems="center">
                <Grid item sm={3}>
                    <Typography sm={12}>
                        icon: {this.state.champion.icon}
                    </Typography>
                </Grid>
                <Grid item sm={3}
                      container
                      direction="column"
                      justify="space-evenly"
                      alignItems="stretch"
                >
                    <Grid item sm={6}>
                        <Typography>
                            name: {this.state.champion.name}
                        </Typography>
                    </Grid>
                    <Grid item sm={6}>
                        <Typography>
                            cs: {this.state.result.creepScore}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item sm={3}
                      container
                      direction="column"
                      justify="space-evenly"
                      alignItems="stretch"
                >
                    <Grid item sm={6}>
                        <Typography>
                            kda: {this.state.result.kda}
                        </Typography>
                    </Grid>
                    <Grid item sm={6}>
                        <Typography>
                            kda: ({this.state.result.kda})
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item sm={3}
                      container
                      direction="column"
                      justify="space-evenly"
                      alignItems="stretch"
                >
                    <Grid item sm={6}>
                        <Typography>
                            winrate: {this.state.result.winRate}
                        </Typography>
                    </Grid>
                    <Grid item sm={6}>
                        <Typography>
                            played: {this.state.result.played}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        );
    }

}