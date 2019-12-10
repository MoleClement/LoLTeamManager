import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import InGameChampion from "./InGameChampion";
import {champion} from "../../stories/4-InGameChampion.stories";
import Button from "@material-ui/core/Button/Button";


export default class StatisticChampion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            playerId: props.playerId,
            champions: [
                {
                    champion: {
                        championIcon: "/img/image-placeholder.png",
                        championName:
                            "Quinn"
                    }
                    ,
                    result: {
                        championPlayed: 100,
                        championWinRate:
                            50,
                        championKDA:
                            12,
                        creepScore:
                            120
                    }
                },
                {
                    champion: {
                        championIcon: "/img/image-placeholder.png",
                        championName:
                            "Quinn"
                    }
                    ,
                    result: {
                        championPlayed: 100,
                        championWinRate:
                            50,
                        championKDA:
                            12,
                        creepScore:
                            120
                    }
                },
                {
                    champion: {
                        championIcon: "/img/image-placeholder.png",
                        championName:
                            "Quinn"
                    }
                    ,
                    result: {
                        championPlayed: 100,
                        championWinRate:
                            50,
                        championKDA:
                            12,
                        creepScore:
                            120
                    }
                },
                {
                    champion: {
                        championIcon: "/img/image-placeholder.png",
                        championName:
                            "Quinn"
                    }
                    ,
                    result: {
                        championPlayed: 100,
                        championWinRate:
                            50,
                        championKDA:
                            12,
                        creepScore:
                            120
                    }
                },
                {
                    champion: {
                        championIcon: "/img/image-placeholder.png",
                        championName:
                            "Quinn"
                    }
                    ,
                    result: {
                        championPlayed: 100,
                        championWinRate:
                            50,
                        championKDA:
                            12,
                        creepScore:
                            120
                    }
                }],
            length: props.length
        }
    }

    getData() {

    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        if (prevProps.playerId !== this.props.playerId) {
            this.getData();
        }
    }

    componentDidMount(): void {
        this.getData();
    }


    render() {
        if (this.state.length === 0) {
            return (
                <div> TODO LOADING DATA </div>
            );
        } else {
            if (this.state.length < 6) {
                return (
                    <Grid
                        container
                        direction="column"
                        justify="space-evenly"
                        alignItems="stretch"
                    >
                        {this.state.champions.map(champion =>
                            <Grid item sm={"12"}>
                                <InGameChampion {...champion.result} {...champion.champion}/>
                            </Grid>)}
                    </Grid>
                );
            } else {
                return (
                    <Grid
                        container
                        direction="column"
                        justify="space-evenly"
                        alignItems="stretch"
                    >
                        {this.state.champions.map(champion =>
                            <Grid item sm={"12"}>
                                <InGameChampion {...champion.result} {...champion.champion}/>
                            </Grid>)}

                        <Button variant="contained">See More ...</Button>
                    </Grid>
                );
            }
        }
    }


}