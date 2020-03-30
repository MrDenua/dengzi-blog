import React, {useState} from 'react'
import {BrowserRouter} from "react-router-dom";
import Box from "@material-ui/core/Box";
import {Grid, Paper} from "@material-ui/core";
import MainRouter from "../router/MainRouter";
import Container from "@material-ui/core/Container";

function isMobile(): boolean {
    let mobileAgent = false;///Android|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
    let smallScreen = (window.innerWidth < 600);
    return mobileAgent || smallScreen;
}

export default function MainComponent() {

    let [drawerHidden, setDrawerHidden] = useState(isMobile());

    return (<div className="App" >

        <BrowserRouter>
            <Grid container style={{background: '#eee'}} justify={"center"}>
                <Box minHeight={"60px"} width={"100%"} bgcolor={"white"} zIndex={999} position={"fixed"}>

                </Box>
                <Grid md={12} style={{background:"white"}}>

                </Grid>
                <Grid md={6} >
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