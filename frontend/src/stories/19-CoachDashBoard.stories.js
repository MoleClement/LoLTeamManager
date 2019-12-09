import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import CoachDashboard from "../components/Display/CoachDashboard";

storiesOf('CoachDashBoard', module)
    .add('default', () => <CoachDashboard/>);