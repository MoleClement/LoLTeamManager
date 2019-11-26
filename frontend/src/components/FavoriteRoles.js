import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InGameRole from "./InGameRole";

export default class FavoriteRoles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: props.roleIcon,
            played: props.played,
            winRate: props.winRate
        }
    }

    render() {
        return (
            <Grid
                container
                direction="column"
                justify="space-evenly"
                alignItems="stretch"
            >
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                >
                    <Grid sm={4}>
                        <Typography variant="h6" color="textPrimary">
                            Lane
                        </Typography>
                    </Grid>
                    <Grid sm={4}>
                        <Typography variant="h6" color="textPrimary">
                            Played
                        </Typography>
                    </Grid>
                    <Grid sm={4}>
                        <Typography variant="h6" color="textPrimary">
                            Win Rate
                        </Typography>
                    </Grid>
                </Grid>
                <Grid>
                    <hr/>
                    <InGameRole roleIcon={"Top"} played={250} winRate={58}/>
                    <InGameRole roleIcon={"Jungle"} played={25} winRate={47}/>
                    <InGameRole roleIcon={"Mid"} played={120} winRate={58}/>
                    <InGameRole roleIcon={"ADC"} played={70} winRate={52}/>
                    <InGameRole roleIcon={"Support"} played={40} winRate={50}/>
                </Grid>

            </Grid>
        );
    }
}