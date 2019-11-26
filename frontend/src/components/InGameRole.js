import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default class InGameRole extends Component {
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
                direction="row"
                justify="space-evenly"
                alignItems="center"
            >
                <Grid sm={4}>
                    <Typography color="textPrimary">
                        {this.state.icon}
                    </Typography>
                </Grid>
                <Grid sm={4}>
                    <Typography color="textPrimary">
                        {this.state.played}
                    </Typography>
                </Grid>
                <Grid sm={4}>
                    <Typography color="textPrimary">
                        {this.state.winRate}%
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}