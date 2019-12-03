import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconShape from "../Shape/IconShape";

export default class InGameRole extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: props.icon,
            played: props.played,
            winRate: props.winRate
        }
    }

    render() {
        const iconData = {
            icon: this.state.icon,
            variant: "square",
            hasVariant: true
        };
        return (
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
            >
                <Grid sm={4}>
                    <IconShape {...iconData}/>
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