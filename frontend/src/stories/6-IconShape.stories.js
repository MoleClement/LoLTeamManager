import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import IconShape from "../components/IconShape";

export const icon = {
    hasVariant: false,
    variant: "",
    icon: "/img/image-placeholder.png"
};

storiesOf('IconShape', module)
    .add('default', () => <IconShape {...icon}/>)
    .add('Rounded', () => <IconShape {...icon} hasVariant variant={"rounded"}/>)
    .add('Square', () => <IconShape {...icon} hasVariant variant={"square"}/>)
    .add('noData', () => <IconShape/>);
