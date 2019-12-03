import React from "react";
import BarChart from "recharts/lib/chart/BarChart";
import CartesianGrid from "recharts/lib/cartesian/CartesianGrid";
import XAxis from "recharts/lib/cartesian/XAxis";
import YAxis from "recharts/lib/cartesian/YAxis";
import Tooltip from "@material-ui/core/Tooltip";
import Legend from "recharts/lib/component/Legend";
import ReferenceLine from "recharts/lib/cartesian/ReferenceLine";
import Bar from "recharts/lib/cartesian/Bar";

export default class MatchResultChart extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <BarChart width={600} height={300} data={data} stackOffset="sign"
                          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <ReferenceLine y={0} stroke='#000'/>
                    <Bar dataKey="Win" fill="#205BC9" stackId="stack"/>
                    <Bar dataKey="Lose" fill="#58B6E5" stackId="stack"/>
                </BarChart>
            </div>
        );
    }

}