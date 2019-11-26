import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import InGameRole from "../components/InGameRole";

export const inGameRole = {
    roleIcon: "mid",
    played: 250,
    winRate: 0
};

storiesOf('inGameRole', module)
    .add('default', () => <InGameRole {...inGameRole}/>);