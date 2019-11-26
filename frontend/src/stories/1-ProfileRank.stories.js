import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import ProfileRank from "../components/ProfileRank";

export const rank = {
    id: "1"
};

export const result = {
    isConnected: false,
    isInGame: false
};

storiesOf('ProfileRank', module)
    .add('default', () => <ProfileRank id={rank.id}  {...result}/>)
    .add('hasNoRank', () => <ProfileRank/>);