import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import CreateTeamForm from "../components/Inputs/CreateTeamForm";

storiesOf('CreateTeamForm', module)
    .add('default', () => <CreateTeamForm/>);