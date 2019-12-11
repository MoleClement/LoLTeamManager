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
import ApiLTM from "../../Apis/ApiLTM";
import CoachProfile from "../Player/CoachProfile";

export default class PlayerDashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            coachName: "Cook",
            coachId: "5deed64f914e0f3154154d7e",
            selectedTeam: -1,
            teams: [],
            teamsName: [],
            isLoading: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.onCreateTeam = this.onCreateTeam.bind(this);
    }

    handleChange(event) {
        console.log("value: 'event' " + event.target.value);
        console.log("Team ID: 'event' " + this.state.teams[event.target.value]);
        this.setState({
            selectedTeam: event.target.value,
        });


    }

    onCreateTeam() {
        this.getData();
       
    }

    componentDidMount() {
        this.getData();
    }

    initializeCoachId() {
        this.setState({isLoading: true});
        const apiLTM = new ApiLTM();
        apiLTM.getCoachByName(this.state.coachName).then(response => {
            this.setState({
                coachId: response.data._id,
                coachName: response.data.name,
                selectedTeam: null,
                teams: null,
                isLoading: false
            });
        }).catch(onerror => {
        });
    }

    getData() {
        this.setState({isLoading: true});
        const apiLTM = new ApiLTM();
        const apiLTM2 = new ApiLTM();

        apiLTM.getTeamsForCoach(this.state.coachId).then(response => {
            console.log("get data: " + response.data);
            this.setState({
                teams: response.data,
                isLoading: false
            });

            let teamDetails = [];
            this.state.teams.map(teamId => {
                apiLTM2.getTeamById(teamId).then(response2 => {
                    teamDetails.push(response2.data.name);
                }).then(() => {
                    this.setState({teamsName: teamDetails})
                })
            });

        }).catch(onerror => {
        });
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

        let StrategyWinRateChartC;
        let TrainingTransferListC;
        let TrainingChartC;
        let TeamC;

        if (this.state.selectedTeam === -1) {

            StrategyWinRateChartC = TrainingTransferListC = TrainingChartC = TeamC = <div/>

        } else {
            console.log("value: 'state' " + this.state.selectedTeam);
            console.log("Team ID: 'state' " + this.state.teams[this.state.selectedTeam]);

            StrategyWinRateChartC = <StrategyWinRateChart
                teamId={this.state.teams[this.state.selectedTeam]}/>;

            TrainingChartC = <TrainingChart teamId={this.state.teams[this.state.selectedTeam]}/>;

            TrainingTransferListC = <TrainingTransferList
                teamId={this.state.teams[this.state.selectedTeam]}/>;

            TeamC = <Team teamId={this.state.teams[this.state.selectedTeam]}/>;

        }
        return (
            <GridLayout className="layout" layout={layout} cols={12} rowHeight={36} width={1900}>
                <div key={'0'}>

                    <CreateTeamForm coachId={this.state.coachId} onCreateTeam={this.onCreateTeam}/>

                    <FormControl variant="outlined" style={{
                        margin: -40,
                        minWidth: 120,
                        float: "right"
                    }}>
                        <InputLabel id="demo-simple-select-outlined-label">Team Name</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={this.selectedTeam}
                            onChange={this.handleChange}
                            labelWidth={90}
                        >
                            <MenuItem value="" disabled>
                                Team Name
                            </MenuItem>
                            {this.state.teamsName.map((team, index) => {
                                return <MenuItem value={index}><em>{team}</em></MenuItem>
                            })}
                        </Select>
                        <FormHelperText>Chose the team to display</FormHelperText>
                    </FormControl>

                </div>
                <div key={'1'}>
                    <Card style={{height: '100%', display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <CardContent>
                            <CoachProfile coachName={this.state.coachName} coachId={this.state.coachId}/>
                        </CardContent>
                    </Card>
                </div>

                <div key={'2'}>
                    <Card style={{height: '100%', display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <CardContent>
                            {StrategyWinRateChartC}
                        </CardContent>
                    </Card>
                </div>
                <div key={'3'}>
                    <Card style={{height: '100%', display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <CardContent>
                            {TrainingTransferListC}
                        </CardContent>
                    </Card>
                </div>
                <div key={'4'}>
                    <Card style={{height: '100%', display: "flex", alignItems: "center"}}>
                        <CardContent>
                            {TrainingChartC}
                        </CardContent>
                    </Card>
                </div>
                <div key={'5'}>
                    <Card style={{height: '100%', display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <CardContent>
                            {TeamC}
                        </CardContent>
                    </Card>
                </div>
            </GridLayout>
        );
    }

}
