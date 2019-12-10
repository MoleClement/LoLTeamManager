import React from "react";
import BarChart from "recharts/lib/chart/BarChart";
import CartesianGrid from "recharts/lib/cartesian/CartesianGrid";
import XAxis from "recharts/lib/cartesian/XAxis";
import YAxis from "recharts/lib/cartesian/YAxis";
import Legend from "recharts/lib/component/Legend";
import ReferenceLine from "recharts/lib/cartesian/ReferenceLine";
import Bar from "recharts/lib/cartesian/Bar";
import CustomMath from "../../function/CustomMath.js"
import Tooltip from "recharts/lib/component/Tooltip";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default class WinRatioChart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            playerId: props.playerId,
            days: props.days,
        }
    }

    getData() {

    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        if (prevProps.playerId !== this.props.playerId) {
            this.getData();
        }
    }

    componentDidMount(): void {
        this.getData();
    }



    render() {
        const data = [
            {name: this.state.days[0].day, Win: this.state.days[0].win, Lose: -this.state.days[0].lose},
            {name: this.state.days[1].day, Win: this.state.days[1].win, Lose: -this.state.days[1].lose},
            {name: this.state.days[2].day, Win: this.state.days[2].win, Lose: -this.state.days[2].lose},
            {name: this.state.days[3].day, Win: this.state.days[3].win, Lose: -this.state.days[3].lose},
            {name: this.state.days[4].day, Win: this.state.days[4].win, Lose: -this.state.days[4].lose},
            {name: this.state.days[5].day, Win: this.state.days[5].win, Lose: -this.state.days[5].lose},
        ];
        return (
            <div>
                <BarChart width={600} height={250} data={data} stackOffset="sign"
                          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false}/>
                    <XAxis dataKey="name"/>
                    <YAxis hide
                           domain={[dataMin => (CustomMath.floor10(dataMin, 1)), dataMax => (CustomMath.ceil10(dataMax, 1))]}
                    />
                    <Legend verticalAlign="top" height={36} iconType={"line"}/>
                    <Tooltip cursor={false} formatter={value => value >= 0 ? value : -value}/>
                    <ReferenceLine y={0}/>
                    <Bar dataKey="Win" fill="#205BC9" stackId="stack"/>
                    <Bar dataKey="Lose" fill="#58B6E5" stackId="stack"/>
                </BarChart>
            </div>
        );
    }
}

WinRatioChart.defaultProps = {
    days: [{
        day: "25.06",
        win: 18,
        lose: 12
    }, {
        day: "26.06",
        win: 8,
        lose: 9
    }, {
        day: "27.06",
        win: 15,
        lose: 5
    }, {
        day: "28.06",
        win: 6,
        lose: 12
    }, {
        day: "29.06",
        win: 5,
        lose: 3
    }, {
        day: "30.06",
        win: 0,
        lose: 5
    }]

};