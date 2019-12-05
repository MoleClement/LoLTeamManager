import React, {Component} from "react";
import Grid from "@material-ui/core/Grid/Grid";
import {Typography} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import IconShape from "../Shape/IconShape";


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
            <Grid container
                  direction="row"
                  justify="space-evenly"
                  alignItems="center">
                <Grid item xs>
                    <IconShape hasVariant variant={"rounded"} icon={this.state.champion.icon}/>
                </Grid>
                <Grid item xs
                      container
                      direction="column"
                      justify="space-evenly"
                      alignItems="stretch"
                >
                    <Grid item xs>
                        <Typography>
                            name: {this.state.champion.name}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography>
                            cs: {this.state.result.creepScore}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs
                      container
                      direction="column"
                      justify="space-evenly"
                      alignItems="stretch"
                >
                    <Grid item xs>
                        <Typography>
                            kda: {this.state.result.kda}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography>
                            kda: ({this.state.result.kda})
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs
                      container
                      direction="column"
                      justify="space-evenly"
                      alignItems="stretch"
                >
                    <Grid item xs>
                        <Typography>
                            winrate: {this.state.result.winRate}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography>
                            played: {this.state.result.played}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        );
    }

}