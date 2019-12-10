import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import WinRateChart from "../components/Chart/WinRateChart";

export const data = {
    win: 170,
    lose: 52,
    winRatio: "88.4%"
};

storiesOf('WinRateChart', module)
    .add('default', () => <WinRateChart {...data}/>);