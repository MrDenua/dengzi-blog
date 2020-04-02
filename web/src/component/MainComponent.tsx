import React, {useState} from 'react'
import {BrowserRouter} from "react-router-dom";
import Box from "@material-ui/core/Box";
import {createStyles, Grid, Paper, Theme, Typography} from "@material-ui/core";
import MainRouter from "../router/MainRouter";
import {makeStyles} from "@material-ui/core/styles";
import NavComponent from "./NavComponent";

function isMobile(): boolean {
    let mobileAgent = false;///Android|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
    let smallScreen = (window.innerWidth < 600);
    return mobileAgent || smallScreen;
}

let useStyle = makeStyles((theme: Theme) =>
    createStyles({
        head: {
            height: "80px",
            width: "100%",
            bgColor: "white",
            zIndex: 100,
            position: "fixed"
        }
    })
);

export default function MainComponent() {

    let [drawerHidden, setDrawerHidden] = useState(isMobile());

    const style = useStyle();
    return (<div className="App">
        <BrowserRouter>
            <Box className={style.head} justifyItems>
                <Grid container justify={"center"}>
                    <Grid xs={12} md={10} lg={6}>
                        <Grid xs={12}>
                            <Typography variant={"h4"} style={{paddingTop: "16px"}}>
                                dengzi blog
                            </Typography>
                            <Typography variant={'subtitle2'} color={"textSecondary"}>
                                try your best, and be best you!
                            </Typography>
                        </Grid>
                        <Grid xs={12} spacing={4}>
                            <NavComponent/>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Grid container style={{background: '#eee'}} justify={"center"}>
                <Grid xs={12}>
                    <Box minHeight={"160px"} bgcolor={"white"}/>
                </Grid>
                <Grid md={10} lg={6}>
                    <Box height={"16px"}/>
                    <Paper elevation={0}>
                        <MainRouter/>
                    </Paper>
                </Grid>
            </Grid>
            {/*<Hidden mdUp>*/}
            {/*    <Drawer open={!drawerHidden && isMobile()} anchor={"left"}*/}
            {/*            onClose={() => setDrawerHidden(!drawerHidden)}>*/}
            {/*        <DrawerComponent/>*/}
            {/*    </Drawer>*/}
            {/*</Hidden>*/}
            {/*<Grid container spacing={0}>*/}
            {/*    <Grid item={true} md={2} hidden={drawerHidden}>*/}
            {/*        <Hidden xsDown>*/}
            {/*            <DrawerComponent/>*/}
            {/*        </Hidden>*/}
            {/*    </Grid>*/}
            {/*    <Grid item={true} xs md xl lg>*/}
            {/*        <Box height={"100vh"} width={"100%"} bgcolor="background.default">*/}
            {/*            <NavBarComponent onMenuClick={setDrawerHidden} drawerHidden={drawerHidden}/>*/}
            {/*            <Box style={{overflow: "auto"}}>*/}
            {/*                <MainRouter/>*/}
            {/*            </Box>*/}
            {/*        </Box>*/}
            {/*    </Grid>*/}
            {/*</Grid>*/}
        </BrowserRouter>
    </div>)
}