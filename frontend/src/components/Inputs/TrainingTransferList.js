import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ApiLTM from "../../Apis/ApiLTM";
import ContentLoader from "react-content-loader";
import CardContent from "@material-ui/core/CardContent";
import GridLayout from "react-grid-layout";

const useStyles = makeStyles(theme => ({
    root: {
        margin: 'auto',
    },
    cardHeader: {
        padding: theme.spacing(1, 2),
    },
    list: {
        width: 200,
        height: 230,
        backgroundColor: theme.palette.background.paper,
        overflow: 'auto',
    },
    button: {
        margin: theme.spacing(0.5, 0),
    },
}));

function not(a, b) {
    return a.filter(value => b.indexOf(value) === -1);
}

function intersection(a, b) {
    return a.filter(value => b.indexOf(value) !== -1);
}

function union(a, b) {
    return [...a, ...not(b, a)];
}

export default function TrainingTransferList(props) {

    const classes = useStyles();
    const practices = ["Communication", "Vision Control", "Dive", "Taking Objectives", "Team Fight"
        , "Lane Management", "Invade", "Coin Flip", "Wave Management", "Win Condition", "Itemization", "Draft"];
    const [checked, setChecked] = React.useState([]);
    const [left, setLeft] = React.useState([]);
    const [right, setRight] = React.useState([]);
    const [isLoading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

    const listLoader = <ContentLoader
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
    </ContentLoader>;

    const updateData = () => {
        const apiLTM = new ApiLTM();
        let practicesToUpdate = {
            right: right, ///Right (value = 1) SENDING INDEX -> BACK: UPDATE MATCHING INDEX ie: index O = Communication, index 1 = Vision Control
            left: left ///Left (value = 0)
            // right: [0, 1, 2, 3, 4, 5],
            // left: [6, 7, 8, 9, 10, 11]
        };

        if (practicesToUpdate.right.length + practicesToUpdate.left.length === 12)
            apiLTM.updateTeamPractices(props.teamId, practicesToUpdate).catch(onerror => {
            });

    };

    const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const numberOfChecked = items => intersection(checked, items).length;

    const handleToggleAll = items => () => {
        if (numberOfChecked(items) === items.length) {
            setChecked(not(checked, items));
        } else {
            setChecked(union(checked, items));
        }
    };

    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };

    const customList = (title, items) => (
        <Card>
            <CardHeader
                className={classes.cardHeader}
                avatar={
                    <Checkbox
                        onClick={handleToggleAll(items)}
                        checked={numberOfChecked(items) === items.length && items.length !== 0}
                        indeterminate={numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0}
                        disabled={items.length === 0}
                        inputProps={{'aria-label': 'all items selected'}}
                    />
                }
                title={title}
                subheader={`${numberOfChecked(items)}/${items.length} selected`}
            />
            <Divider/>
            <List className={classes.list} dense component="div" role="list">
                {items.map(value => {
                    const labelId = `transfer-list-all-item-${value}-label`;

                    return (
                        <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{'aria-labelledby': labelId}}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={practices[value]}/>
                        </ListItem>
                    );
                })}
                <ListItem/>
            </List>
        </Card>
    );

    useEffect(() => {
        getData();
    }, [props.teamId]);

    const getData = () => {

        setLoading(true);
        const apiLTM = new ApiLTM();
        apiLTM.getTeamById(props.teamId).then(response => {

            setRight(response.data.practices.right);
            setLeft(response.data.practices.left);

        }).then(setLoading(false)).catch(onerror => {
            setLoading(false);
            setError(error)
        });
    };

    useEffect(() => {
        updateData();
    }, [right, left]);


    if (isLoading)
        return listLoader;

    else
        return (
            <Card style={{height: '100%', display: "flex", alignItems: "center", justifyContent: "center"}}>
                <CardContent>
                    <Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>
                        <Grid item>{customList('To Train', left)}</Grid>
                        <Grid item>
                            <Grid container direction="column" alignItems="center">
                                <Button
                                    variant="outlined"
                                    size="small"
                                    className={classes.button}
                                    onClick={handleCheckedRight}
                                    disabled={leftChecked.length === 0}
                                    aria-label="move selected right"
                                >
                                    &gt;
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    className={classes.button}
                                    onClick={handleCheckedLeft}
                                    disabled={rightChecked.length === 0}
                                    aria-label="move selected left"
                                >
                                    &lt;
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid item>{customList('Mastered', right)}</Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
}