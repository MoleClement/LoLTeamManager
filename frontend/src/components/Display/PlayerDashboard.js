import React from "react";
import Grid from "@material-ui/core/Grid";
import DataShape from "../Shape/DataShape";
import PlayerProfile from "../Player/PlayerProfile";
import ProfileRank from "../Player/ProfileRank";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FavoriteRoles from "../Player/FavoriteRoles";
import RecentMatches from "../Match/RecentMatches";
import StatisticChampions from "../Champion/StatisticChampions";
import GridLayout from 'react-grid-layout';
import WinRateChart from "../Chart/WinRateChart";
import WinRatioChart from "../Chart/WinRatioChart";
import MatchResult from "../Match/MatchResult";

///const ResponsiveGridLayout = WidthProvider(Responsive);

export default class PlayerDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {playerId: props.match.params.playerId}
    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        if (prevProps.match.params.playerId !== this.props.match.params.playerId)
            this.setState({playerId: this.props.match.params.playerId})
    }

    render() {

        const layout = [
            {i: '0', x: 0, y: 0, w: 3, h: 6, static: true},
            {i: '1', x: 3, y: 0, w: 3, h: 6, static: true},
            {i: '2', x: 6, y: 0, w: 3, h: 6, static: true},
            {i: '3', x: 9, y: 0, w: 3, h: 6, static: true},
            {i: '4', x: 3, y: 6, w: 6, h: 6, static: true},
            {i: '5', x: 9, y: 6, w: 3, h: 12, static: true},
            {i: '6', x: 0, y: 6, w: 3, h: 6, static: true},
            {i: '7', x: 0, y: 12, w: 9, h: 6, static: true},
        ];

        return (
            <GridLayout className="layout" layout={layout} cols={12} rowHeight={35} width={1800}>
                <div key={'0'}>
                    <Card style={{height: '100%', display: "flex", alignItems: "center"}}>
                        <CardContent style={{display: "inline-block"}}>
                            <PlayerProfile playerId={this.state.playerId}/>
                        </CardContent>
                    </Card>
                </div>
                <div key={'1'}>
                    <Card style={{height: '100%', display: "flex", alignItems: "center"}}>
                        <CardContent>
                            <ProfileRank playerId={this.state.playerId} queue={"single"}/>
                        </CardContent>
                    </Card>
                </div>
                <div key={'2'}>
                    <Card style={{height: '100%', display: "flex", alignItems: "center"}}>
                        <CardContent>
                            <ProfileRank playerId={this.state.playerId} queue={"flex"}/>
                        </CardContent>
                    </Card>
                </div>
                <div key={'3'}>
                    <Card style={{height: '100%', display: "flex", alignItems: "center"}}>
                        <CardContent>
                            <ProfileRank playerId={this.state.playerId} queue={"tft"}/>
                        </CardContent>
                    </Card>
                </div>
                <div key={'4'}>
                    <Card style={{
                        height: '100%',
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <CardContent>
                            <WinRatioChart playerId={this.state.playerId}/>
                        </CardContent>
                    </Card>
                </div>
                <div key={'5'}>
                    <Card style={{
                        height: '100%',
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <CardContent>
                            <StatisticChampions playerId={this.state.playerId}/>
                        </CardContent>
                    </Card>
                </div>
                <div key={'6'}>
                    <Card style={{
                        height: '100%',
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <CardContent>
                            <WinRateChart playerId={this.state.playerId}/>
                        </CardContent>
                    </Card>
                </div>
                <div key={'7'}>
                    <Card style={{
                        height: '100%',
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <CardContent>
                            <MatchResult playerId={this.state.playerId}/>
                        </CardContent>
                    </Card>
                </div>
            </GridLayout>
        );
    }
}
