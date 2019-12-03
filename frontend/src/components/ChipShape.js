import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

export default class DataShape extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: props.content,
        }
    }

    render() {

        return (
            <Chip label={this.state.content}/>);
    }
}

DataShape.defaultProps = {
    spacing: 0
};
