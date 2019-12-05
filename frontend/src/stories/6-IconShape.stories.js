import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import IconShape from "../components/Shape/IconShape";

export const icon = {
    hasVariant: false,
    variant: "",
    icon: "/img/image-placeholder.png"
};

storiesOf('IconShape', module)
    .add('Default', () => <IconShape {...icon}/>)
    .add('Small Rounded', () => <IconShape {...icon} hasVariant variant={"rounded"}/>)
    .add('Small Square', () => <IconShape {...icon} hasVariant variant={"square"}/>)
    .add('Big Default', () => <IconShape {...icon} big/>)
    .add('Big Rounded', () => <IconShape {...icon} big hasVariant variant={"rounded"}/>)
    .add('Big Square', () => <IconShape {...icon} big hasVariant variant={"square"}/>)
    .add('noData', () => <IconShape/>);
