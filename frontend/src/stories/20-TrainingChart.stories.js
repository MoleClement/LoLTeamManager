import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import TrainingChart from "../components/Chart/TrainingChart";

storiesOf('TrainingChart', module)
    .add('default', () => <TrainingChart/>);