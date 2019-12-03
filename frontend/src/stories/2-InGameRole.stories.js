import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import InGameRole from "../components/Match/InGameRole";

export const inGameRole = {
    icon: "/img/image-placeholder.png",
    played: 250,
    winRate: 52
};

storiesOf('inGameRole', module)
    .add('default', () => <InGameRole {...inGameRole}/>);