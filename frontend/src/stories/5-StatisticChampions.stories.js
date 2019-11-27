import React from "react";
import {storiesOf} from "@storybook/react/dist/client/preview";

import StatisticChampion from "../components/StatisticChampions";

storiesOf('StatisticChampions', module)
    .add('default', () => <StatisticChampion length={6}/>)
    .add('exceedLimit', () => <StatisticChampion length={7}/>)
    .add('noData', () => <StatisticChampion length={0}/>);
