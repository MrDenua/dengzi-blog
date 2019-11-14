import React from "react";
import {Box} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Hidden from "@material-ui/core/Hidden";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import {ExpandMore} from "@material-ui/icons"
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";

function style(): any {
    return makeStyles(theme => ({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
        avatar: {
            height: "80px",
            width: "80px"
        }
    }));
}

// class DrawerComponent extends React.Component {

function DrawerComponent() {
    let n = style()();
    return (
        <Paper style={{zIndex: 1200}}>
            <Hidden xsDown implementation="css">
                <Box height={"100vh"} bgcolor="background.paper" style={{overflow: "auto"}}>
                    <Grid container justify="center" alignItems="center" style={{height: "200px"}}>
                        <Grid container justify="center" alignItems="flex-start">
                            <Avatar alt="dengzi" style={{height: "80px", width: "80px"}}
                                    src={"http://dengzii.com/static/img/pic.png"}/>
                        </Grid>
                        <Typography variant="h6">dengzi</Typography>
                    </Grid>
                    <Divider/>
                    <nav>
                        <List>
                            {['Home', 'About', 'Friends'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemText primary={text}/>
                                </ListItem>
                            ))}
                            <ListItem button>
                                <ListItemText primary="Category"/>
                                <ExpandMore/>
                            </ListItem>
                            <Collapse in={true} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {['Java', 'Python', 'Web', 'Other'].map((text, index) => (
                                        <ListItem button selected={index === 2} className={n.nested}>
                                            <ListItemText primary={text}/>
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                        </List>
                        <Divider/>
                        <List>
                            {['Hots', 'Tags', 'Archive'].map((text, index) => (
                                <ListItem button key={text}>
                                    {/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>*/}
                                    <ListItemText primary={text}/>
                                </ListItem>
                            ))}
                        </List>
                    </nav>


                </Box>
            </Hidden>

        </Paper>
    )
}

// }

export default DrawerComponent