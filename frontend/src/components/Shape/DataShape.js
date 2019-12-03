import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default class DataShape extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            direction: props.direction,
            content: props.content,
            title: props.title,
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
                        justify="space-evenly"
                        alignItems="center"
                        spacing={this.state.spacing}
                    >
                        <Grid xs item>
                            <Typography variant="caption" display="block" gutterBottom>
                                {this.state.title}
                            </Typography>
                        </Grid>
                        <Grid xs item>
                            <Typography variant="caption" display="block" gutterBottom>
                                {this.state.content}
                            </Typography>
                        </Grid>
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
                        <Grid xs item>
                            <Typography variant="caption" display="block" gutterBottom>
                                {this.state.title}
                            </Typography>
                        </Grid>
                        <Grid xs item>
                            <Typography variant="caption" display="block" gutterBottom>
                                {this.state.content}
                            </Typography>
                        </Grid>
                    </Grid>
                );

        }
    }
}

DataShape.defaultProps = {
    spacing: 0
};
