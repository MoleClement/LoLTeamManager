import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import MatchResult from "../components/Match/MatchResult";

export const data = {
    champion: {
        icon: "/img/image-placeholder.png",
        spell1: "",
        spell2: "",
        score: "0/0/0",
        kda: "2.5"
    },
    result: {
        result: "Victory",
        creepScore: "100",
        gold: "12K4",
    },
    game: {
        queue: "Solo/Duo",
        gameTime: "25:30",
        date: "Yesterday"
    },
    runes: [],
    equipments: []
};

storiesOf('MatchResult', module)
    .add('default', () =>
        <MatchResult {...data.champion} {...data.result} {...data.game} {...data.runes} {...data.equipments}/>);