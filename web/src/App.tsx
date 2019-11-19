import React from 'react';
import './App.css';
import {Grid} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import NavBarComponent from "./component/NavBarComponent";
import DrawerComponent from "./component/DrawerComponent";
import Drawer from "@material-ui/core/Drawer";
import MainRouter from "./router/MainRouter";
import {BrowserRouter, Router} from "react-router-dom";
import {createBrowserHistory} from "history";

class MainComponent extends React.Component<any, { drawerHidden: boolean }> {

    constructor(props: Readonly<any>) {
        super(props);
        this.state = {drawerHidden: false};
        this.handleDrawerStateChange = this.handleDrawerStateChange.bind(this);
    }

    handleDrawerStateChange(drawerHidden: boolean) {
        this.setState({drawerHidden: drawerHidden});
    }

    render() {

        let fixedDrawerOpen = this.showFixedDrawer();
        let floatDrawerOpen = this.showFloatDrawer();

        return (
            <div className="App">
                <BrowserRouter>
                    <Drawer open={false} anchor={"left"}>
                        <DrawerComponent/>
                    </Drawer>
                    <Grid container spacing={0}>
                        <Grid item={true} md={2} hidden={fixedDrawerOpen}>
                            <DrawerComponent/>
                        </Grid>
                        <Grid item={true} xs md xl lg>
                            <Box height={"100vh"} width={"100%"} bgcolor="background.default">
                                <NavBarComponent onMenuClick={this.handleDrawerStateChange}/>
                                <Box style={{overflow: "auto"}}>
                                    <MainRouter/>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </BrowserRouter>
            </div>
        )
    }

    showFloatDrawer():boolean{
        return this.state.drawerHidden && false;
    }

    showFixedDrawer(): boolean {
        return this.state.drawerHidden && true;
    }
}

const App = MainComponent;
export default App;
