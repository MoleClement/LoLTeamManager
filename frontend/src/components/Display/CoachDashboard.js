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
import TrainingTransferList from "../Inputs/TrainingTransferList";
import StrategyWinRateChart from "../Chart/StrategyWinRateChart";
import Team from "../Team";
import TrainingChart from "../Chart/TrainingChart";

///const ResponsiveGridLayout = WidthProvider(Responsive);

export default class PlayerDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        const layout = [
            {i: '0', x: 0, y: 0, w: 11, h: 2, static: true},
            {i: '1', x: 0, y: 2, w: 3, h: 5, static: true},
            {i: '2', x: 3, y: 2, w: 4, h: 10, static: true},
            {i: '3', x: 7, y: 2, w: 4, h: 10, static: true},
            {i: '4', x: 0, y: 7, w: 3, h: 10, static: true},
            {i: '5', x: 3, y: 12, w: 8, h: 5, static: true},
        ];


        return (
            <GridLayout className="layout" layout={layout} cols={12} rowHeight={36} width={1900}>
                <div key={'0'}>
                    <Card style={{
                        height: '100%',
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <CardContent style={{display: "inline-block"}}>
                            Select Team / Add Team
                        </CardContent>
                    </Card>
                </div>
                <div key={'1'}>
                    <Card style={{height: '100%', display: "flex", alignItems: "center"}}>
                        <CardContent>
                            <PlayerProfile/>
                        </CardContent>
                    </Card>
                </div>
                <div key={'2'}>
                    <Card style={{height: '100%', display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <CardContent>
                            <StrategyWinRateChart/>
                        </CardContent>
                    </Card>
                </div>
                <div key={'3'}>
                    <Card style={{height: '100%', display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <CardContent>
                            <TrainingTransferList/>
                        </CardContent>
                    </Card>
                </div>
                <div key={'4'}>
                    <Card style={{height: '100%', display: "flex", alignItems: "center"}}>
                        <CardContent>
                            <TrainingChart/>
                        </CardContent>
                    </Card>
                </div>
                <div key={'5'}>
                    <Card style={{height: '100%', display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <CardContent>
                            <Team/>
                        </CardContent>
                    </Card>
                </div>
            </GridLayout>
        );
    }
}
