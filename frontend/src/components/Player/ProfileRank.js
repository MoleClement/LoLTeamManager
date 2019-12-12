import React from "react";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import {Typography} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import IconShape from "../Shape/IconShape";
import ApiLTM from "../../Apis/ApiLTM";

const bull = <span className={"bullet"}>•</span>;

export default class ProfileRank extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerId: props.playerId,
            rank: {
                rank: props.rank,
                rankIcon: props.rankIcon,
                rankLP: props.rankLP,
                rankWinRate: props.rankWinRate,
                rankQueue: props.rankQueue
            },
            result: {
                winNumber: props.winNumber,
                loseNumber: props.loseNumber
            },
            hasRank: props.hasRank
        };
    }


    getData() {
        const apiLTM = new ApiLTM();

        /* switch (this.state.queue) {
             case "single" :
                 apiLTM.getPlayerRank(this.state.playerId).then(response => {

                     this.setState(
                         {
                             playerId: response.data.playerId,
                             rank: {
                                 rank: response.data.rank,
                                 rankIcon: response.data.rankIcon,
                                 rankLP: response.data.rankLP,
                                 rankWinRate: response.data.rankWinRate,
                                 rankQueue: response.data.rankQueue
                             },
                             result: {
                                 winNumber: response.data.winNumber,
                                 loseNumber: response.data.loseNumber
                             },
                             hasRank: response.data.hasRank
                         }
                     );
                 }).catch(onerror => {
                 });
                 break;
             case "tft" :
                 apiLTM.getPlayerRankTFT(this.state.playerId).then(response => {

                     this.setState(
                         {
                             playerId: response.data.playerId,
                             rank: {
                                 rank: response.data.rank,
                                 rankIcon: response.data.rankIcon,
                                 rankLP: response.data.rankLP,
                                 rankWinRate: response.data.rankWinRate,
                                 rankQueue: response.data.rankQueue
                             },
                             result: {
                                 winNumber: response.data.winNumber,
                                 loseNumber: response.data.loseNumber
                             },
                             hasRank: response.data.hasRank
                         }
                     );
                 }).catch(onerror => {
                 });
                 break;
             case "flex" :
                 apiLTM.getPlayerRankFlex(this.state.playerId).then(response => {

                     this.setState(
                         {
                             playerId: response.data.playerId,
                             rank: {
                                 rank: response.data.rank,
                                 rankIcon: response.data.rankIcon,
                                 rankLP: response.data.rankLP,
                                 rankWinRate: response.data.rankWinRate,
                                 rankQueue: response.data.rankQueue
                             },
                             result: {
                                 winNumber: response.data.winNumber,
                                 loseNumber: response.data.loseNumber
                             },
                             hasRank: response.data.hasRank
                         }
                     );
                 }).catch(onerror => {
                 });
                 break;
         }*/

    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
        /*   if (prevProps.playerId !== this.props.playerId) {
               this.getData();
           }*/
    }

    componentDidMount(): void {
       //this.getData();
    }

    render() {
        if (this.state.hasRank) {
            return (
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={2}/>
                    <Grid item xs>
                        <IconShape big/>
                    </Grid>
                    <Grid
                        container xs
                        direction="column"
                        justify="center"
                        alignItems="flex-start"
                    >
                        <Typography color="textPrimary" variant={"body2"} gutterBottom>
                            {this.props.queue}
                        </Typography>
                        <Typography variant="h5" component="h2" gutterBottom>
                            {this.state.rank.rank}
                        </Typography>
                        <Typography variant="body2" component={"p"} gutterBottom>
                            {this.state.rank.rankLP} LP: {bull} {this.state.result.winNumber}
                            <span> Win </span> {this.state.result.loseNumber} <span>Lose</span>
                            <br/>
                            <span>Win Rate: </span> {this.state.rank.rankWinRate}%
                        </Typography>
                    </Grid>
                    <Grid item xs={2}/>
                </Grid>
            );
        } else {
            return (
                <div/>
            );
        }

    }

}

ProfileRank.defaultProps = {
    rank: "Diamond II",
    rankIcon: "rankImg",
    rankLP: "25",
    rankWinRate: "53",
    rankQueue: "Single Queue",
    winNumber: "120",
    loseNumber: "100",
    hasRank: true
};