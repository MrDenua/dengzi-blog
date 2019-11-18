import React from "react";
import {Box} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import Hidden from "@material-ui/core/Hidden";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import DrawerNavItem, {NavItem} from "../widget/DrawerNavItem";

const categories: NavItem[] = [
    {title: "Java", path: "/category/java"},
    {title: "Python", path: "/category/python"},
    {title: "Web", path: "/category/web"},
    {title: "Other", path: "/category/other"},
];

const nav: NavItem[] = [
    {title: "Home", path: "/home"},
    {title: "Category", path: "/category", child: categories},
    {title: "Friends", path: "/friends"},
    {title: "About", path: "/about"}
];

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

function DrawerComponent() {

    return (
        <Paper style={{zIndex: 1200}}>
            <Hidden xsDown implementation="css">
                <Box height={"100vh"} bgcolor="background.paper" style={{overflow: "auto"}}>
                    <DrawerHeaderComp/>
                    <Divider/>
                    <List>
                        {
                            nav.map((value: NavItem) => (
                                <DrawerNavItem title={value.title} path={value.path} child={value.child}/>)
                            )
                        }
                    </List>
                    <Divider/>
                </Box>
            </Hidden>

        </Paper>
    )
}

export default DrawerComponent