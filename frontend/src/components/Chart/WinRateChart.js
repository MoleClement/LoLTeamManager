import React from "react";
import PieChart from "recharts/lib/chart/PieChart";
import Pie from "recharts/lib/polar/Pie";
import Cell from "recharts/lib/component/Cell";

const COLORS = ['#205BC9', '#58B6E5'];

export default class WinRateChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            win: props.win,
            lose: props.lose,
            winRate: props.winRate
        }
    }

    render() {

        const data = [{name: 'Win', value: this.state.win}, {name: 'Lose', value: this.state.lose},
        ];

        return (
            <div>
                <PieChart width={400} height={200}>
                    <Pie
                        data={data}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={2}
                    >
                        {
                            data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                        }
                    </Pie>
                </PieChart>
            </div>
        );
    }
}