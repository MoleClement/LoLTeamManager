import React from "react";
import Grid from "@material-ui/core/Grid";
import IconShape from "../Shape/IconShape";
import DataDisplay from "../Display/DataDisplay";
import DataShape from "../Shape/DataShape";
import IconDisplay from "../Display/IconDisplay";
import ChipShape from "../Shape/ChipShape";

export default class MatchResult extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            champion: {
                icon: props.icon,
                spell1: props.spell1,
                spell2: props.spell2,
                score: props.score,
                kda: props.kda
            },
            result: {
                result: props.result,
                creepScore: props.creepScore,
                gold: props.gold,
            },
            game: {
                queue: props.queue,
                gameTime: props.gameTime,
                date: props.date
            },
            runes: props.runes,
            equipments: props.equipments
        };
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
            icon: "/img/image-placeholder.png"
        },
            {
                hasVariant: true,
                variant: "rounded",
                icon: "/img/image-placeholder.png"
            }
        ];
        const equipmentData = [
            {
                hasVariant: true,
                variant: "rounded",
                icon: "/img/image-placeholder.png"
            }, {
                hasVariant: true,
                variant: "rounded",
                icon: "/img/image-placeholder.png"
            }, {
                hasVariant: true,
                variant: "rounded",
                icon: "/img/image-placeholder.png"
            }, {
                hasVariant: true,
                variant: "rounded",
                icon: "/img/image-placeholder.png"
            }, {
                hasVariant: true,
                variant: "rounded",
                icon: "/img/image-placeholder.png"
            }, {
                hasVariant: true,
                variant: "rounded",
                icon: "/img/image-placeholder.png"
            },
        ];
        const runeData = [
            {

                icon: "/img/image-placeholder.png"
            }, {

                icon: "/img/image-placeholder.png"
            }, {

                icon: "/img/image-placeholder.png"
            }, {

                icon: "/img/image-placeholder.png"
            }, {

                icon: "/img/image-placeholder.png"
            }, {
                icon: "/img/image-placeholder.png"
            },
        ];

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