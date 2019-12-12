import * as React from "react";
import ScatterChart from "recharts/lib/chart/ScatterChart";
import XAxis from "recharts/lib/cartesian/XAxis";
import YAxis from "recharts/lib/cartesian/YAxis";
import ZAxis from "recharts/lib/cartesian/ZAxis";
import Scatter from "recharts/lib/cartesian/Scatter";
import ApiLTM from "../../Apis/ApiLTM";
import ContentLoader from "react-content-loader";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default class TrainingChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            /*   data: [
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
               ],
               data03: [
                   {period: 'morning', index: 1, value: 100},
                   {period: 'afternoon', index: 1, value: 150},
                   {period: 'evening', index: 1, value: 100},
                   {period: 'night', index: 1, value: 100}
               ],*/
            data: [],
            data01: [],
            data02: [],
            data03: [],
            teamId: props.teamId,
            isLoading: false,
            error: null
        };
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


    componentDidMount() {
        this.getData();
    }

    componentDidUpdate(prevProps, prevState, snapshot): void {

        if (this.props.teamId !== prevProps.teamId) {
            this.setState({teamId: this.props.teamId});
            this.getData();
        }
    }

    getData() {

        this.setState({isLoading: true});
        const apiLTM = new ApiLTM();

        apiLTM.getTeamById(this.props.teamId).then(response => {

            this.setState({
                data: [
                    {period: 'morning', index: 1, value: response.data.training.sunday[0]},
                    {period: 'afternoon', index: 1, value: response.data.training.sunday[1]},
                    {period: 'evening', index: 1, value: response.data.training.sunday[2]},
                    {period: 'night', index: 1, value: response.data.training.sunday[3]}
                ],
                data01: [
                    {period: 'morning', index: 1, value: response.data.training.wednesday[0]},
                    {period: 'afternoon', index: 1, value: response.data.training.wednesday[1]},
                    {period: 'evening', index: 1, value: response.data.training.wednesday[2]},
                    {period: 'night', index: 1, value: response.data.training.wednesday[3]}
                ],
                data02: [
                    {period: 'morning', index: 1, value: response.data.training.friday[0]},
                    {period: 'afternoon', index: 1, value: response.data.training.friday[1]},
                    {period: 'evening', index: 1, value: response.data.training.friday[2]},
                    {period: 'night', index: 1, value: response.data.training.friday[3]}
                ],
                data03: [
                    {period: 'morning', index: 1, value: response.data.training.saturday[0]},
                    {period: 'afternoon', index: 1, value: response.data.training.saturday[1]},
                    {period: 'evening', index: 1, value: response.data.training.saturday[2]},
                    {period: 'night', index: 1, value: response.data.training.saturday[3]}
                ],
                isLoading: false,
            })

        }).then(this.setState({isLoading: false})).catch(onerror => {
            this.setState({isLoading: false, error: onerror})
        });

    }

    render() {

        const domain = this.parseDomain();
        const range = [0, 300];

        const {isLoading, data, data01, data02, data03} = this.state;

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

        /*  if(isLoading)
          return <ChartLoader/>;*/

        return (

            <Card style={{height: '100%', display: "flex", alignItems: "center", justifyContent: "center"}}>
                <CardContent>
                    <ScatterChart width={400} height={60} margin={{top: 10, right: 0, bottom: 0, left: 0}}>
                        <XAxis type="category" dataKey="period" interval={0} tick={{fontSize: 0}}
                               tickLine={{transform: 'translate(0, -6)'}}/>
                        <YAxis type="number" dataKey="index" name="sunday" height={10} width={80} tick={false}
                               tickLine={false} axisLine={false} label={{value: 'Sunday', position: 'insideRight'}}/>
                        <ZAxis type="number" dataKey="value" domain={domain} range={range}/>
                        <Scatter data={data} fill='#8884d8'/>
                    </ScatterChart>

                    <ScatterChart width={400} height={60} margin={{top: 10, right: 0, bottom: 0, left: 0}}>
                        <XAxis type="category" dataKey="period" name="hour" interval={0} tick={{fontSize: 0}}
                               tickLine={{transform: 'translate(0, -6)'}}/>
                        <YAxis type="number" dataKey="index" height={10} width={80} tick={false} tickLine={false}
                               axisLine={false} label={{value: 'Wednesday', position: 'insideRight'}}/>
                        <ZAxis type="number" dataKey="value" domain={domain} range={range}/>
                        <Scatter data={data01} fill='#8884d8'/>
                    </ScatterChart>

                    <ScatterChart width={400} height={60} margin={{top: 10, right: 0, bottom: 0, left: 0}}>
                        <XAxis type="category" dataKey="period" name="hour" interval={0} tick={{fontSize: 0}}
                               tickLine={{transform: 'translate(0, -6)'}}/>
                        <YAxis type="number" dataKey="index" height={10} width={80} tick={false} tickLine={false}
                               axisLine={false} label={{value: 'Friday', position: 'insideRight'}}/>
                        <ZAxis type="number" dataKey="value" domain={domain} range={range}/>
                        <Scatter data={data02} fill='#8884d8'/>
                    </ScatterChart>

                    <ScatterChart width={400} height={60} margin={{top: 10, right: 0, bottom: 0, left: 0}}>
                        <XAxis type="category" dataKey="period" name="hour" interval={0}
                               tickLine={{transform: 'translate(0, -6)'}}/>
                        <YAxis type="number" dataKey="index" height={10} width={80} tick={false} tickLine={false}
                               axisLine={false} label={{value: 'Saturday', position: 'insideRight'}}/>
                        <ZAxis type="number" dataKey="value" domain={domain} range={range}/>
                        <Scatter data={data03} fill='#8884d8'/>
                    </ScatterChart>
                </CardContent>
            </Card>
        );
    }
};