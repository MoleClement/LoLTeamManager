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
            champions: [{
                champion: {
                    icon: "",
                    championName: "Diana"
                },
                result: {
                    championPlayed: 75,
                    championWinRate: 82,
                    championKDA: "8.5",
                    championCreepScore: "125"
                }
            },
                {
                    champion: {
                        icon: "",
                        championName: "Shyvana"
                    },
                    result: {
                        championPlayed: 62,
                        championWinRate: 79,
                        championKDA: "5.9",
                        championCreepScore: "186"
                    }
                }]
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

    componentDidUpdate(prevProps, prevState, snapshot): void {
        /* if (prevProps.playerId !== this.props.playerId) {
             this.getData();
         }*/
    }

    componentDidMount(): void {
        // this.getData();
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

StatisticChampion.defaultProps = {
    champions: [{
        champion: {
            icon: "",
            name: "Diana"
        },
        result: {
            played: 75,
            winRate: 82,
            kda: "8.5",
            creepScore: "125"
        }
    },
        {
            champion: {
                icon: "",
                name: "Shyvana"
            },
            result: {
                played: 62,
                winRate: 79,
                kda: "5.9",
                creepScore: "186"
            }
        }]
};