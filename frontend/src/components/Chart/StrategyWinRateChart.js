import React, {Component} from 'react';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import Legend from "recharts/lib/component/Legend";
import ApiLTM from "../../Apis/ApiLTM";
import ContentLoader from "react-content-loader";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default class StrategyWinRateChart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            teamId: props.teamId,
            isLoading: false,
            error: null
        }
    }

    componentDidMount() {
        this.getTeamData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.teamId !== prevProps.teamId)
        {
            this.setState({teamId : this.props.teamId});
            this.getTeamData();
        }
    }

    getTeamData() {

        this.setState({isLoading: true});
        const apiLTM = new ApiLTM();
        apiLTM.getTeamById(this.props.teamId).then(response => {
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
                ]
            })
        }).then(this.setState({isLoading:false})).catch(onerror => {
            this.setState({
                error: onerror,
                isLoading: false
            })
        });

    }

    render() {

        const {isLoading, data} = this.state;

        const ChartLoader = () => (
            <ContentLoader
                height={600}
                width={600}
                speed={1}
                primaryColor="#d9d9d9"
                secondaryColor="#ecebeb"
            >
                <rect x="100" y="100" rx="5" ry="5" width="55" height="220"/>
                <rect x="160" y="220" rx="5" ry="5" width="55" height="100"/>
                <rect x="220" y="160" rx="5" ry="5" width="55" height="160"/>
                <rect x="280" y="260" rx="5" ry="5" width="55" height="60"/>
                <rect x="460" y="140" rx="5" ry="5" width="55" height="180"/>
                <rect x="340" y="40" rx="5" ry="5" width="55" height="280"/>
                <rect x="400" y="200" rx="5" ry="5" width="55" height="120"/>
            </ContentLoader>
        );


      /*  if (isLoading)
            return <ChartLoader/>;
*/
        return (
            <Card style={{height: '100%', display: "flex", alignItems: "center", justifyContent: "center"}}>
                <CardContent>
            <RadarChart outerRadius={150} width={550} height={400} data={data}>
                <PolarGrid/>
                <PolarAngleAxis dataKey="strategy"/>
                <PolarRadiusAxis angle={30} domain={[0, 100]}/>
                <Radar name="Strategy Win Rate" dataKey="A" stroke="#205BC9" fill="#58B6E5" fillOpacity={0.6}/>
                <Radar name="Objectives" dataKey="B" stroke="#C80C0C" fill="#fff" fillOpacity={0.0}/>
                <Legend/>
            </RadarChart>
                </CardContent>
            </Card>
        );
    }
}
