import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import InGameChampion from "../components/InGameChampion";


export const champion = {
    champion: {
        championIcon: "/img/image-placeholder.png",
        championName: "Jinx"
    },
    result: {
        championPlayed: 100,
        championWinRate: 50,
        championKDA: 12,
        creepScore: 120
    }
};

storiesOf('InGameChampion', module)
    .add('default', () => <InGameChampion {...champion.champion} {...champion.result}/>);