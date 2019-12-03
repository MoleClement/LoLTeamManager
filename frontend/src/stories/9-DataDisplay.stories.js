import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import DataDisplay from "../components/Display/DataDisplay";


storiesOf('DataDisplay', module)
    .add('default', () => <DataDisplay/>)
    .add('row', () => <DataDisplay direction={"row"} spacing={1}/>)
    .add('row-reverse', () => <DataDisplay direction={"row-reverse"} spacing={1}/>)
    .add('column', () => <DataDisplay direction={"column"} spacing={1}/>)
    .add('column-reverse', () => <DataDisplay direction={"column-reverse"} spacing={1}/>);
