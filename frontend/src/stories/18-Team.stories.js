import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import Team from "../components/Team";

storiesOf('Team', module)
    .add('default', () => <Team/>);