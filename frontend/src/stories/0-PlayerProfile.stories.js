import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import PlayerProfile from "../components/Player/PlayerProfile";

export const data = {

    playerName: "Feengh",
    playerRating: "12,521 (0.08%)",
    id: 10,
    accountIcon: "",
    accountLevel: "188",
    isConnected: false,
    isInGame: false,
    gameSeason: "Profile season 10"
};


storiesOf('PlayerProfile', module)
    .add('default', () => <PlayerProfile {...data}/>)

    .add('isConnectedIsNotInGame', () => <PlayerProfile {...data} isConnected/>)
    .add('isConnectedIsInGame', () => <PlayerProfile {...data} isConnected isInGame/>)
    .add('playerDataDoesNotExist', () => <PlayerProfile/>);