import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import StrategyWinRateChart from "../components/Chart/StrategyWinRateChart";

export const data = [

    {
        strategy: 'Split Push', A: 45, B: 50, fullMark: 100,
    },
    {
        strategy: 'Poke', A: 66, B: 50, fullMark: 100,
    },
    {
        strategy: 'Protect the Carry', A: 75, B: 50, fullMark: 100,
    },
    {
        strategy: 'Area of Effect', A: 86, B: 50, fullMark: 100,
    },
    {
        strategy: 'Swap Lane', A: 39, B: 50, fullMark: 100,
    }
];

storiesOf('StrategyWinRateChart', module)
    .add('default', () => <StrategyWinRateChart data={data}/>);