import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import DataShape from "../components/DataShape";

export const data = {
    direction: "",
    content: "Content",
    title: "Title",
};

storiesOf('DataShape', module)
    .add('default', () => <DataShape {...data}/>)
    .add('row', () => <DataShape {...data} direction={"row"}/>)
    .add('row-reverse', () => <DataShape  {...data} direction={"row-reverse"}/>)
    .add('column', () => <DataShape {...data} direction={"column"}/>)
    .add('column-reverse', () => <DataShape {...data} direction={"column-reverse"}/>)
