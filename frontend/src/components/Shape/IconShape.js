import React from "react";
import Avatar from "@material-ui/core/Avatar";
import {Icon} from "@material-ui/core";

export default class IconShape extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            icon: props.icon,
            variant: props.variant,
            hasVariant: props.hasVariant,
            big: props.big
        }
    }

    render() {
        switch (this.state.big) {
            case true:
                if (!this.state.hasVariant)
                    return (
                        <Avatar src={this.state.icon} style={{
                            width: 90,
                            height: 90,
                            marginBottom:10
                        }}/>
                    );
                else
                    return (
                        <Avatar variant={this.state.variant} src={this.state.icon} style={{
                            width: 90,
                            height: 90,
                            marginBottom:10
                        }}/>
                    );
            default:
            case false:
                if (!this.state.hasVariant)
                    return (
                        <Avatar src={this.state.icon}/>
                    );
                else
                    return (
                        <Avatar variant={this.state.variant} src={this.state.icon}/>
                    );
        }

    }
}

IconShape.defaultProps = {
    hasVariant: false,
    variant: "",
    icon: "/img/image-placeholder.png",
    big: false
};