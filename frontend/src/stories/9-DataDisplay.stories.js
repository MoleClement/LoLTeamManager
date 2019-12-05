import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import DataDisplay from "../components/Display/DataDisplay";

export const data = [
    {
        direction: "row",
        content: "Content 1",
        title: "Title 1",
    },
    {
        direction: "row",
        content: "Content 2",
        title: "Title 2",
    },
    {
        direction: "row",
        content: "Content 3",
        title: "Title 3",
    }
];

storiesOf('DataDisplay', module)
    .add('default', () => <DataDisplay data={data}/>)
    .add('row', () => <DataDisplay direction={"row"} data={data} spacing={1}/>)
    .add('row-reverse', () => <DataDisplay direction={"row-reverse"} data={data} spacing={1}/>)
    .add('column', () => <DataDisplay direction={"column"} data={data} spacing={1}/>)
    .add('column-reverse', () => <DataDisplay direction={"column-reverse"} data={data} spacing={1}/>);
