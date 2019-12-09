import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import TrainingTransferList from "../components/Inputs/TrainingTransferList";

storiesOf('TrainingTransferList', module)
    .add('default', () => <TrainingTransferList/>);