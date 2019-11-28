import React from "react";
import Grid from "@material-ui/core/Grid";
import IconShape from "./IconShape";
import DataDisplay from "./DataDisplay";
import DataShape from "./DataShape";
import IconDisplay from "./IconDisplay";

export default class MatchResult extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            champion: {
                icon: props.championIcon,
                spell1: props.spell1,
                spell2: props.spell2,
                score: props.score,
                kda: props.championKDA
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
                direction: "row",
                title: "KDA",
                content: this.state.result.kda
            },
            {
                direction: "row",
                title: "Minions",
                content: this.state.result.creepScore
            },
            {
                direction: "row",
                title: "Gold",
                content: this.state.result.gold
            },
            {
                direction: "row",
                title: "Game Time",
                content: this.state.game.gameTime
            },
            {
                direction: "row",
                title: "Date",
                content: this.state.game.date
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

                <Grid item xs={12}
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center">

                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center">

                        <Grid item xs={3}>
                            <IconShape icon={this.state.champion.championIcon}/>
                        </Grid>
                        <Grid xs={1}>
                            <DataShape direction={"column"} spacing={2}
                                       title={this.state.result.result}
                                       component={this.state.game.queue}
                            />
                        </Grid>

                        <Grid item xs={1}>
                            <DataShape direction={"column"} spacing={2}
                                       title={""}
                                       component={this.state.result.score}
                            />
                        </Grid>

                        <Grid xs={6}>
                            <DataDisplay spacing={2} data={data}/>
                        </Grid>

                    </Grid>

                </Grid>


                <Grid item xs={12}
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center">

                    <Grid item xs={1}>
                        <IconShape icon={this.state.champion.spell1} hasVariant variant={"rounded"}/>
                    </Grid>
                    <Grid item xs={1}>
                        <IconShape icon={this.state.champion.spell2} hasVariant variant={"rounded"}/>
                    </Grid>

                    <Grid item xs={5}>
                        <IconDisplay icons={equipmentData}/>
                    </Grid>

                    <Grid item xs={5}>
                        <IconDisplay icons={runeData}/>
                    </Grid>

                </Grid>


            </Grid>
        );
    }

}