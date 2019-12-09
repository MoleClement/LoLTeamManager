import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import Drawer from "../components/Drawer/AppDrawer";

storiesOf('Drawer', module)
    .add('default', () => <Drawer/>);