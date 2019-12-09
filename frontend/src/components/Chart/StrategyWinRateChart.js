import React, {Component} from 'react';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import Legend from "recharts/lib/component/Legend";

export default class StrategyWinRateChart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: props.data
        }
    }

    render() {
        return (
            <RadarChart outerRadius={150} width={500} height={500} data={this.state.data}>
                <PolarGrid/>
                <PolarAngleAxis dataKey="strategy"/>
                <PolarRadiusAxis angle={30} domain={[0, 100]}/>
                <Radar name="Strategy Win Rate" dataKey="A" stroke="#205BC9" fill="#58B6E5" fillOpacity={0.6}/>
                <Radar name="Objectives" dataKey="B" stroke="#C80C0C" fill="#fff" fillOpacity={0.0}/>
                <Legend/>
            </RadarChart>
        );
    }
}

StrategyWinRateChart.defaultProps = {
    data: [
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
    ]
};
