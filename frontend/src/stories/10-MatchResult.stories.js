import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import MatchResult from "../components/MatchResult";


storiesOf('MatchResult', module)
    .add('default', () => <MatchResult/>);