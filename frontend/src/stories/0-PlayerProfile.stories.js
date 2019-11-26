import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import PlayerProfile from "../components/PlayerProfile";

export const playerProfile = {
    id: "1"
};

export const playerState = {
    isConnected: false,
    isInGame: false
};

storiesOf('PlayerProfile', module)
    .add('default', () => <PlayerProfile id={playerProfile.id}  {...playerState}/>)
    .add('doestNotExist', () => <PlayerProfile/>)
    .add('isConnectedNotInGame', () => <PlayerProfile id={playerProfile.id} isConnected={true}
                                                      isInGame={false}/>)
    .add('isInGame', () => <PlayerProfile id={playerProfile.id} isConnected={true}
                                          isInGame={true}/>);