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
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import CreateTeamForm from "../Inputs/CreateTeamForm";

///const ResponsiveGridLayout = WidthProvider(Responsive);

export default class PlayerDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            selectedTeam: 0,
            teams: [
                {teamName: "Team 1", teamId: 1},
                {teamName: "Team 2", teamId: 2},
                {teamName: "Team 3", teamId: 3}
            ]
        };

        this.handleChange = this.handleChange.bind(this);
        this.onCreateTeam = this.onCreateTeam.bind(this);
    }

    handleChange(event) {
        this.setState({selectedTeam: event.target.value})
    }

    onCreateTeam() {
        this.getData();
        this.setState({
            selectedTeam: (this.state.teams.length - 1)
        });
    }

    getData() {
        this.setState({ teams: [
                {teamName: "Team 1", teamId: 1},
                {teamName: "Team 2", teamId: 2},
                {teamName: "Team 3", teamId: 3},
                {teamName: "Team 4", teamId: 4}
            ]})
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

                    <CreateTeamForm onCreateTeam={this.onCreateTeam}/>

                    <FormControl variant="outlined" style={{
                        margin: -40,
                        minWidth: 120,
                        float: "right"
                    }}>
                        <InputLabel id="demo-simple-select-outlined-label">Team</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={this.selectedTeam}
                            onChange={this.handleChange}
                            labelWidth={50}
                        >
                            <MenuItem value={-1}>
                                <em>None</em>
                            </MenuItem>
                            {this.state.teams.map((team, index) => {
                                return <MenuItem value={index}>{team.teamName}</MenuItem>
                            })}
                        </Select>
                        <FormHelperText>Chose the team to display</FormHelperText>
                    </FormControl>

                </div>
                <div key={'1'}>
                    <Card style={{height: '100%', display: "flex", alignItems: "center"}}>
                        <CardContent>
                            <PlayerProfile teamId={this.state.teams[this.state.selectedTeam].teamName}/>
                        </CardContent>
                    </Card>
                </div>
                <div key={'2'}>
                    <Card style={{height: '100%', display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <CardContent>
                            <StrategyWinRateChart teamId={this.state.teams[this.state.selectedTeam].teamId}/>
                        </CardContent>
                    </Card>
                </div>
                <div key={'3'}>
                    <Card style={{height: '100%', display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <CardContent>
                            <TrainingTransferList teamId={this.state.teams[this.state.selectedTeam].teamId}/>
                        </CardContent>
                    </Card>
                </div>
                <div key={'4'}>
                    <Card style={{height: '100%', display: "flex", alignItems: "center"}}>
                        <CardContent>
                            <TrainingChart teamId={this.state.teams[this.state.selectedTeam].teamId}/>
                        </CardContent>
                    </Card>
                </div>
                <div key={'5'}>
                    <Card style={{height: '100%', display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <CardContent>
                            <Team teamId={this.state.teams[this.state.selectedTeam].teamId}/>
                        </CardContent>
                    </Card>
                </div>
            </GridLayout>
        );
    }
}
