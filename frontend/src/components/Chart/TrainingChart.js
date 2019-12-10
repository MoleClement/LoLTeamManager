import * as React from "react";
import ScatterChart from "recharts/lib/chart/ScatterChart";
import XAxis from "recharts/lib/cartesian/XAxis";
import YAxis from "recharts/lib/cartesian/YAxis";
import ZAxis from "recharts/lib/cartesian/ZAxis";
import Scatter from "recharts/lib/cartesian/Scatter";

export default class TrainingChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {period: 'morning', index: 1, value: 0},
                {period: 'afternoon', index: 1, value: 300},
                {period: 'evening', index: 1, value: 150},
                {period: 'night', index: 1, value: 0}
            ],

            data01: [
                {period: 'morning', index: 1, value: 250},
                {period: 'afternoon', index: 1, value: 250},
                {period: 'evening', index: 1, value: 100},
                {period: 'night', index: 1, value: 125}
            ],

            data02: [
                {period: 'morning', index: 1, value: 100},
                {period: 'afternoon', index: 1, value: 150},
                {period: 'evening', index: 1, value: 100},
                {period: 'night', index: 1, value: 0}
            ], data03: [
                {period: 'morning', index: 1, value: 100},
                {period: 'afternoon', index: 1, value: 150},
                {period: 'evening', index: 1, value: 100},
                {period: 'night', index: 1, value: 100}
            ],
            teamId: props.teamId
        }
    }

    parseDomain() {
        return [
            0,
            Math.max.apply(null, [
                ...this.state.data.map(entry => entry.value),
                ...this.state.data01.map(entry => entry.value),
                ...this.state.data02.map(entry => entry.value),
                ...this.state.data03.map(entry => entry.value),
            ])
        ];
    };


    componentDidMount(): void {
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        if (this.props.teamId !== prevProps.teamId)
            this.getData();
    }

    getData() {
        this.setState({
            data: [
                {period: 'morning', index: 1, value: 150},
                {period: 'afternoon', index: 1, value: 250},
                {period: 'evening', index: 1, value: 300},
                {period: 'night', index: 1, value: 100}
            ],

            data01: [
                {period: 'morning', index: 1, value: 150},
                {period: 'afternoon', index: 1, value: 200},
                {period: 'evening', index: 1, value: 300},
                {period: 'night', index: 1, value: 0}
            ],

            data02: [
                {period: 'morning', index: 1, value: 125},
                {period: 'afternoon', index: 1, value: 0},
                {period: 'evening', index: 1, value: 200},
                {period: 'night', index: 1, value: 150}
            ], data03: [
                {period: 'morning', index: 1, value: 200},
                {period: 'afternoon', index: 1, value: 100},
                {period: 'evening', index: 1, value: 300},
                {period: 'night', index: 1, value: 0}
            ]
        })
    }

    render() {
        const domain = this.parseDomain();
        const range = [0, 300];

        return (
            <div>
                <ScatterChart width={400} height={60} margin={{top: 10, right: 0, bottom: 0, left: 0}}>
                    <XAxis type="category" dataKey="period" interval={0} tick={{fontSize: 0}}
                           tickLine={{transform: 'translate(0, -6)'}}/>
                    <YAxis type="number" dataKey="index" name="sunday" height={10} width={80} tick={false}
                           tickLine={false} axisLine={false} label={{value: 'Sunday', position: 'insideRight'}}/>
                    <ZAxis type="number" dataKey="value" domain={domain} range={range}/>
                    <Scatter data={this.state.data} fill='#8884d8'/>
                </ScatterChart>

                <ScatterChart width={400} height={60} margin={{top: 10, right: 0, bottom: 0, left: 0}}>
                    <XAxis type="category" dataKey="period" name="hour" interval={0} tick={{fontSize: 0}}
                           tickLine={{transform: 'translate(0, -6)'}}/>
                    <YAxis type="number" dataKey="index" height={10} width={80} tick={false} tickLine={false}
                           axisLine={false} label={{value: 'Wednesday', position: 'insideRight'}}/>
                    <ZAxis type="number" dataKey="value" domain={domain} range={range}/>
                    <Scatter data={this.state.data01} fill='#8884d8'/>
                </ScatterChart>

                <ScatterChart width={400} height={60} margin={{top: 10, right: 0, bottom: 0, left: 0}}>
                    <XAxis type="category" dataKey="period" name="hour" interval={0} tick={{fontSize: 0}}
                           tickLine={{transform: 'translate(0, -6)'}}/>
                    <YAxis type="number" dataKey="index" height={10} width={80} tick={false} tickLine={false}
                           axisLine={false} label={{value: 'Friday', position: 'insideRight'}}/>
                    <ZAxis type="number" dataKey="value" domain={domain} range={range}/>
                    <Scatter data={this.state.data02} fill='#8884d8'/>
                </ScatterChart>

                <ScatterChart width={400} height={60} margin={{top: 10, right: 0, bottom: 0, left: 0}}>
                    <XAxis type="category" dataKey="period" name="hour" interval={0}
                           tickLine={{transform: 'translate(0, -6)'}}/>
                    <YAxis type="number" dataKey="index" height={10} width={80} tick={false} tickLine={false}
                           axisLine={false} label={{value: 'Saturday', position: 'insideRight'}}/>
                    <ZAxis type="number" dataKey="value" domain={domain} range={range}/>
                    <Scatter data={this.state.data03} fill='#8884d8'/>
                </ScatterChart>
            </div>
        );
    }
};

TrainingChart.defaultProps = {
    data: [
        {period: 'morning', index: 1, value: 0},
        {period: 'afternoon', index: 1, value: 300},
        {period: 'evening', index: 1, value: 150},
        {period: 'night', index: 1, value: 0}
    ],

    data01: [
        {period: 'morning', index: 1, value: 250},
        {period: 'afternoon', index: 1, value: 250},
        {period: 'evening', index: 1, value: 100},
        {period: 'night', index: 1, value: 125}
    ],

    data02: [
        {period: 'morning', index: 1, value: 100},
        {period: 'afternoon', index: 1, value: 150},
        {period: 'evening', index: 1, value: 100},
        {period: 'night', index: 1, value: 0}
    ], data03: [
        {period: 'morning', index: 1, value: 100},
        {period: 'afternoon', index: 1, value: 150},
        {period: 'evening', index: 1, value: 100},
        {period: 'night', index: 1, value: 100}
    ]
};