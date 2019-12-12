import React from "react";
import Grid from "@material-ui/core/Grid";
import IconShape from "../Shape/IconShape";
import DataDisplay from "../Display/DataDisplay";
import DataShape from "../Shape/DataShape";
import IconDisplay from "../Display/IconDisplay";
import ChipShape from "../Shape/ChipShape";
import ApiLTM from "../../Apis/ApiLTM";

export default class MatchResult extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            matchId: props.matchId,
            champion: {
                icon: "",
                spell1: "",
                spell2: "",
                score: "12/2/10",
                kda: "11.0"
            },
            result: {
                result: "Victory",
                creepScore: "230",
                gold: "9875g",
            },
            game: {
                queue: "Single",
                gameTime: "24min 25sec",
                date: "01.03"
            },
            runes: [],
            equipments: []
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot): void {
        /* if (prevProps.matchId !== this.props.matchId) {
             this.getData();
         }*/
    }

    componentDidMount(): void {
        //  this.getData();
    }

    getData() {

        const apiLTM = new ApiLTM();

        apiLTM.getMatchResult(this.state.matchId).then(response => {

            this.setState({
                matchId: response.data.matchId,
                champion: {
                    icon: response.data.icon,
                    spell1: response.data.spell1,
                    spell2: response.data.spell2,
                    score: response.data.score,
                    kda: response.data.kda
                },
                result: {
                    result: response.data.result,
                    creepScore: response.data.creepScore,
                    gold: response.data.gold,
                },
                game: {
                    queue: response.data.queue,
                    gameTime: response.data.gameTime,
                    date: response.data.date
                },
                runes: response.data.runes,
                equipments: response.data.equipments
            })

        }).catch(onerror => {
        });
    }

    render() {

        const data = [
            {
                direction: "column",
                title: "KDA",
                content: this.state.champion.kda
            },
            {
                direction: "column",
                title: "Minions",
                content: this.state.result.creepScore
            },
            {
                direction: "column",
                title: "Gold",
                content: this.state.result.gold
            },
            {
                direction: "column",
                title: "Game Time",
                content: this.state.game.gameTime
            },
            {
                direction: "column",
                title: "Date",
                content: this.state.game.date
            }
        ];

        const spellsData = [{
            hasVariant: true,
            variant: "rounded",
            icon: this.state.champion.spell1
        },
            {
                hasVariant: true,
                variant: "rounded",
                icon: this.state.champion.spell2
            }
        ];

        let equipmentData = [];

        this.state.equipments.map(equipment => {
            equipmentData.push({
                hasVariant: true,
                variant: "rounded",
                icon: equipment.icon
            })
        });

        let runeData = [];
        this.state.runes.map(rune => {
            runeData.push({
                icon: rune.icon
            })
        });

        return (
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
            >
                <Grid item xs={12}
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center">

                </Grid>

                <Grid xs={12} item
                      container
                      direction="row"
                      alignItems="center"
                      justify="center"
                >
                    <Grid item xs>
                        <IconShape big icon={this.state.champion.icon}/>
                    </Grid>

                    <Grid item xs>
                        <DataShape direction={"column"} spacing={1}
                                   title={this.state.result.result}
                                   content={this.state.game.queue}
                        />
                    </Grid>
                    <Grid item xs>
                        <ChipShape content={this.state.champion.score}/>
                    </Grid>

                    <Grid item xs={4}>
                        <DataDisplay spacing={1} direction={"row"} data={data}/>
                    </Grid>
                    <Grid item xs/>

                </Grid>

                <Grid xs={12} item
                      container
                      direction="row"
                      alignItems="center"
                      justify="center"
                >
                    <Grid item xs={1}>
                        <IconDisplay icons={spellsData} spacing={1}/>
                    </Grid>

                    <Grid item xs/>

                    <Grid item xs={3}>
                        <IconDisplay icons={equipmentData} spacing={1}/>
                    </Grid>
                    <Grid item xs/>
                    <Grid item xs={3}>
                        <IconDisplay icons={runeData} spacing={1}/>
                    </Grid>
                    <Grid item xs/>
                </Grid>
            </Grid>
        );
    }
}
MatchResult.defaultProps = {
    champion: {
        icon: "",
        spell1: "",
        spell2: "",
        score: "12/2/10",
        kda: "11.0"
    },
    result: {
        result: "Victory",
        creepScore: "230",
        gold: "9875g",
    },
    game: {
        queue: "Single",
        gameTime: "24min 25sec",
        date: "01.03"
    },
    runes: [],
    equipments: []
};