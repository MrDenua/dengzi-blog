import React from 'react';
import './App.css';
import {Grid} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import NavBarComponent from "./component/NavBarComponent";
import DrawerComponent from "./component/DrawerComponent";
import Drawer from "@material-ui/core/Drawer";
import ArticleListComponent from "./component/ArticleListComponent";

class MainComponent extends React.Component {

    render() {
        return (
            <div className="App">
                <Drawer open={false} anchor={"left"}>
                    <DrawerComponent/>
                </Drawer>
                <Grid container spacing={0}>
                    <Grid item={true} md={2}>
                        <DrawerComponent/>
                    </Grid>
                    <Grid item={true} xs md xl lg>
                        <Box height={"100vh"} width={"100%"} bgcolor="background.default">
                            <NavBarComponent/>
                            <ArticleListComponent/>
                        </Box>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const App = MainComponent;
export default App;
