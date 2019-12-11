import React, {Component} from 'react';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import Legend from "recharts/lib/component/Legend";
import ApiLTM from "../../Apis/ApiLTM";

export default class StrategyWinRateChart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            teamId: props.teamId
        }
    }

    componentDidMount() {
        this.getTeamData();
    }

    getTeamData() {
        const apiLTM = new ApiLTM();
        apiLTM.getTeamById(this.state.teamId).then(response => {
            this.setState({
                data: [
                    {
                        strategy: response.data.strategy[0].name,
                        A: response.data.strategy[0].winRate,
                        B: 50,
                        fullMark: 100,
                    },
                    {
                        strategy: response.data.strategy[1].name,
                        A: response.data.strategy[1].winRate,
                        B: 50,
                        fullMark: 100,
                    },
                    {
                        strategy: response.data.strategy[2].name,
                        A: response.data.strategy[2].winRate,
                        B: 50,
                        fullMark: 100,
                    },
                    {
                        strategy: response.data.strategy[3].name,
                        A: response.data.strategy[3].winRate,
                        B: 50,
                        fullMark: 100,
                    },
                    {
                        strategy: response.data.strategy[4].name,
                        A: response.data.strategy[4].winRate,
                        B: 50,
                        fullMark: 100,
                    }
                ],
                teamId: this.props.teamId
            })
        }).catch(onerror => {
        });

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.teamId !== prevProps.teamId)
            this.getTeamData();
    }

    render() {
        return (
            <RadarChart outerRadius={150} width={550} height={400} data={this.state.data}>
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
