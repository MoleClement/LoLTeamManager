import React from "react";
import Grid from "@material-ui/core/Grid";
import DataShape from "../Shape/DataShape";

export default class DataDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            /*data:[
            {
                direction: "row",
                title: "KDA",
                content: "0.65"
            },
            {
                direction: "row",
                title: "Minions",
                content: "184"
            },
            {
                direction: "row",
                title: "Gold",
                content: "13.5K"
            }
        ],*/
            direction: props.direction,
            spacing: props.spacing
        }
    }

    render() {
        switch (this.state.direction) {
            case "row":
            case "row-reverse":
            case "column":
            case "column-reverse":
                return (
                    <Grid
                        container
                        direction={this.state.direction}
                        justify="center"
                        alignItems="center"
                        spacing={this.state.spacing}
                    >
                        {this.state.data.map(data => (
                            <Grid item xs>
                                <DataShape {...data} spacing={this.state.spacing}/>
                            </Grid>
                        ))}
                    </Grid>
                );
            default:
                return (
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={this.state.spacing}
                    >
                        {this.state.data.map(data => (
                            <Grid item xs>
                                <DataShape {...data}/>
                            </Grid>
                        ))}
                    </Grid>
                );
        }
    }
}

DataDisplay.defaultProps = {
    spacing: 0
};