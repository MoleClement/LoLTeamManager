import makeStyles from "@material-ui/core/styles/makeStyles";
import useTheme from "@material-ui/core/styles/useTheme";
import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import GamesIcon from "@material-ui/icons/Games"
import ExploreIcon from "@material-ui/icons/Explore"
import InfoIcon from "@material-ui/icons/Info"
import ListIcon from "@material-ui/icons/List"
import SearchIcon from "@material-ui/icons/Search"
import NotificationsIcon from "@material-ui/icons/Notifications"
import TimeLineIcon from "@material-ui/icons/Timeline"
import GroupIcon from "@material-ui/icons/Group"
import PowerIcon from "@material-ui/icons/PowerSettingsNew"
import EventIcon from "@material-ui/icons/EmojiEvents"
import CustomAppBar from "./CustomAppBar";
import InputBase from "@material-ui/core/InputBase";
import {fade} from "@material-ui/core/styles";
import PlayerDashboard from "../Display/PlayerDashboard";
import CoachDashboard from "../Display/CoachDashboard";
import {Link, Redirect, Route, Switch, withRouter} from "react-router-dom";
import Explore from "../Display/Explore";
import nav from "../../util/nav";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },

    drawerContent: {
        position: 'relative',
        margin: 'auto'
    },
    drawerFooter: {
        position: 'relative',
        top: 'auto',
        bottom: 0,
        ///boxSizing: 'border-box'
    },
    drawerHeader: {},
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },

        width: '100%',
        [theme.breakpoints.up('sm')]: {
            margin: 'auto',
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '50vw',
            '&:focus': {
                width: "70vw",
            },
        },
    },
}));

function AppDrawer(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [redirect, setRedirection] = React.useState(false);
    const [redirectPath, setRedirectionPath] = React.useState("");

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const onSubmitSearch = (e) => {
        if (e.key === 'Enter') {
            nav('/player-dashboard/' + e.target.value);
            setRedirection(true);
            setRedirectionPath('/player-dashboard/' + e.target.value);
        }
    };
        return (
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <div/>
                        <div className={classes.search}>

                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                placeholder="Search summoner..."
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{'aria-label': 'search'}}
                                onKeyDown={onSubmitSearch}
                            />

                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                    open={open}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                        </IconButton>
                    </div>
                    <Divider/>
                    <div className={classes.drawerContent}>

                        <List>
                            {['Dashboard', 'Explore', 'Strategies', 'Tournaments'].map((text) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{(() => {
                                        switch (text) {
                                            case 'Dashboard':
                                                return <Link to={"/coach-dashboard"}><DashboardIcon
                                                    text={text}/></Link>;
                                            case 'Explore':
                                                return <Link to={"/player-dashboard"}><ExploreIcon text={text}/></Link>;
                                            case 'Strategies':
                                                return <ListIcon text={text}/>;
                                            case 'Tournaments':
                                                return <EventIcon text={text}/>;
                                            default:
                                                return null;
                                        }
                                    })()}</ListItemIcon>
                                    <ListItemText primary={text}/>
                                </ListItem>
                            ))}
                        </List>

                    </div>
                    <Divider/>
                    <div className={classes.drawerFooter}>
                        <Divider/>
                        <List>
                            <ListItem button key={"Disconnect"}>
                                <ListItemIcon><PowerIcon/></ListItemIcon>
                                <ListItemText primary={"Disconnect"}/>
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <Switch>
                        <Route  exact path="/" render={() => (
                            <Redirect to="/coach-dashboard"/>
                        )}/>
                        <Route path='/coach-dashboard' component={CoachDashboard}/>
                        <Switch>
                            <Route exact path={"/player-dashboard"} component={Explore}>
                            </Route>
                            <Route path={"/player-dashboard/:playerId"} component={PlayerDashboard}>
                            </Route>
                        </Switch>
                    </Switch>
                </main>
            </div>
        );
}
export default withRouter(AppDrawer)