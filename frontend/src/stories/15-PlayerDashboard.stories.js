import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import PlayerDashboard from "../components/Display/PlayerDashboard";

storiesOf('PlayerDashboard', module)
    .add('default', () => <PlayerDashboard/>);