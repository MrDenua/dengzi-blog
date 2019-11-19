import React, {Component} from "react";
import AppBar from "@material-ui/core/AppBar";
import {createStyles, IconButton, Theme, Toolbar, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Close, Search} from "@material-ui/icons";
import InputBase from "@material-ui/core/InputBase";
import {fade} from "@material-ui/core/styles";

class NavBarComponent extends Component<{ onMenuClick: (drawerHidden: boolean) => void }, { drawerHidden: boolean }> {

    constructor(props: Readonly<{ onMenuClick: () => void }>) {
        super(props);
        this.handMenuIconClick = this.handMenuIconClick.bind(this);
        this.state = {drawerHidden: false}
    }

    handMenuIconClick() {

        this.setState({drawerHidden: !this.state.drawerHidden});
        this.props.onMenuClick(!this.state.drawerHidden);
    }

    componentDidMount(): void {

        // this.context.router.history.listen((r: LocationState) => {
        //     console.log(r);
        // });
    }

    render() {

        return (
            <div style={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={this.handMenuIconClick}>
                            <Close/>
                        </IconButton>
                        <Typography variant="h6" style={{
                            flexGrow: 1,
                            paddingRight: "16px"
                        }}>
                            Home
                        </Typography>
                        <SearchComp/>
                        {/*<Button color="inherit">Login</Button>*/}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
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
                width: 120,
                '&:focus': {
                    width: 200,
                },
            },
        },
    }),
);

function SearchComp(prop: any) {
    const classes = useStyles();
    return (<div className={classes.search}>
        <div className={classes.searchIcon}>
            <Search/>
        </div>
        <InputBase
            placeholder="Search…"
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
            }}
            inputProps={{'aria-label': 'search'}}
        />
    </div>)
}


export default NavBarComponent