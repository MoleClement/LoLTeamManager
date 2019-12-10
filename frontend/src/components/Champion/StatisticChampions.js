import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import InGameChampion from "./InGameChampion";
import {champion} from "../../stories/4-InGameChampion.stories";
import Button from "@material-ui/core/Button/Button";
import ApiLTM from "../../Apis/ApiLTM";

export default class StatisticChampion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            playerId: props.playerId,
            champion: []
        }
    }

    getData() {

        const apiLTM = new ApiLTM();

        apiLTM.getPlayerStatisticChampions(this.state.playerId).then(response => {

         /*   [{
                    champion: {
                        championIcon: "iconUrl",
                        championName: "championName"
                    },
                    result: {
                        championPlayed: 0,
                        championWinRate: 0,
                        championKDA: 0,
                        creepScore: 0
                    }
                }]*/

            this.setState({
                champions: response.data.champions
            })

        }).catch(onerror => {
        });
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
    }

}