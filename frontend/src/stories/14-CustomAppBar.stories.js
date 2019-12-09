import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import CustomAppBar from "../components/Drawer/CustomAppBar";

storiesOf('AppBar', module)
    .add('default', () => <CustomAppBar/>);