import React from "react";
import Grid from "@material-ui/core/Grid";
import IconShape from "./IconShape";

export default class IconDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            icons: props.icons
            /*  icons: [
                  {
                      hasVariant: false,
                      variant: "",
                      icon: "/img/image-placeholder.png"
                  },
                  {
                      hasVariant: true,
                      variant: "rounded",
                      icon: "/img/image-placeholder.png"
                  },
                  {
                      hasVariant: true,
                      variant: "square",
                      icon: "/img/image-placeholder.png"
                  }
              ]*/
        }
    }

    render() {
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                {this.state.icons.map(icon => (
                    <Grid item xs>
                        <IconShape {...icon}/>
                    </Grid>
                ))}
            </Grid>
        )
    }
}