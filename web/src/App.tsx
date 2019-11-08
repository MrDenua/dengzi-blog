import React from 'react';
import './App.css';
import {Grid} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import NavBarComponent from "./component/NavBarComponent";

class MainComponent extends React.Component {

    render() {
        return (
            <div className="App">
                <NavBarComponent/>
                <Grid container spacing={0}>
                    <Grid item={true} md={2} >
                        <Box height={"100vh"} width={"100%"} bgcolor="primary.main"/>
                    </Grid>
                    <Grid item={true} md={10}>
                        <Box height={"100vh"} width={"100%"} bgcolor="primary.light"/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}


const App = MainComponent;
export default App;
