import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import WinRatioChart from "../components/Chart/WinRatioChart";

export const data = [{
    day: "25.06",
    win: 18,
    lose: 12
},{
    day: "26.06",
    win: 8,
    lose: 9
},{
    day: "27.06",
    win: 15,
    lose: 5
},{
    day: "28.06",
    win: 6,
    lose: 12
},{
    day: "29.06",
    win: 5,
    lose: 3
},{
    day: "30.06",
    win: 0,
    lose: 5
}
];

storiesOf('WinRatioChart', module)
    .add('default', () => <WinRatioChart days={data}/>);