import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import ProfileRank from "../components/Player/ProfileRank";

export const rank = {
    rank: "Diamond II",
    rankIcon: "rankImg",
    rankLP: "25",
    rankWinRate: "53",
    rankQueue: "Single Queue",
    winNumber: "120",
    loseNumber: "100",
    hasRank: true
};


storiesOf('ProfileRank', module)
    .add('default', () => <ProfileRank {...rank}/>)
    .add('hasNoRank', () => <ProfileRank hasRank={false}/>);