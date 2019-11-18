import React from "react";
import {Box} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Hidden from "@material-ui/core/Hidden";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DrawerNavItem, {NavItem} from "../widget/DrawerNavItem";

const style = {
    height: "100vh",
    overflow: "auto"
};
const categories: NavItem[] = ["Java", "Python", "TypeScript", "Android"]
    .map((value) => of(value, "/category/" + value.toLowerCase()));

const nav: NavItem[] = [
    of("Home", "/home"),
    of("Category", "/category", categories),
    of("Friends", "/friends"),
    of("About", "/about")
];

function of(title: string, path: string = "", child: undefined | NavItem[] = undefined): NavItem {
    return {title: title, path: path, currentPath: "/", child: child, onSelect: ()=>{}}
}

function DrawerHeaderComp(prop: any) {
    return (
        <Grid container justify="center" alignItems="center" style={{height: "200px"}}>
            <Grid container justify="center" alignItems="flex-start">
                <Avatar alt="dengzi" style={{height: "80px", width: "80px"}}
                        src={"http://dengzii.com/static/img/pic.png"}/>
            </Grid>
            <Typography variant="h6">dengzi</Typography>
        </Grid>
    )
}

class DrawerComponent extends React.Component<any, { currentPath: string }> {

    constructor(props: Readonly<any>) {
        super(props);
        this.onItemSelect = this.onItemSelect.bind(this);
        this.state = {currentPath: "/"};
    }

    onItemSelect(path: string) {
        this.setState({currentPath: path})
    }

    render() {
        return (
            <Hidden xsDown implementation="css">
                <Box bgcolor="background.paper" style={style}>
                    <DrawerHeaderComp/>
                    <Divider/>
                    <List>
                        {nav.map((value: NavItem) => (
                            <DrawerNavItem currentPath={this.state.currentPath} onSelect={this.onItemSelect}
                                           title={value.title} path={value.path}
                                           child={value.child} key={value.path}/>)
                        )}
                    </List>
                    <Divider/>
                </Box>
            </Hidden>
        )
    }
}

export default DrawerComponent