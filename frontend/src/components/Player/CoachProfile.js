import React from "react";
import {Typography} from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import IconShape from "../Shape/IconShape";


export default class CoachProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            coachId: props.coachId,
            coachName: props.coachName,
        };
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        if (prevProps.coachId !== this.props.coachId) {
            this.setState({
                coachId: this.props.coachId,
                coachName: this.props.coachName
            })
        }
    }

    componentDidMount(): void {
        this.getData();
    }

    render() {
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
                    <Typography variant="h5" component="h2" gutterBottom>
                        {this.state.player.coachName}
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}
