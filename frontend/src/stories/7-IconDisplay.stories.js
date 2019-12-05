import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import IconDisplay from "../components/Display/IconDisplay";

export const icons = [
    {
        hasVariant: false,
        variant: "",
        icon: "/img/image-placeholder.png"
    },
    {
        hasVariant: true,
        variant: "rounded",
        icon: "/img/image-placeholder.png"
    },
    {
        hasVariant: true,
        variant: "square",
        icon: "/img/image-placeholder.png"
    }
];

storiesOf('IconDisplay', module)
    .add('default', () => <IconDisplay icons={icons}/>);
