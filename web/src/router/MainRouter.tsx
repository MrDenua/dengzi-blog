import React from "react";
import {Route, Switch} from "react-router-dom";
import ArticleListComponent from "../component/ArticleListComponent";
import AboutMeComponent from "../component/AboutMeComponent";
import FriendsComponent from "../component/FriendsComponent";
import ArticleComponent from "../component/ArticleComponent";

export default class MainRouter extends React.Component {

    render() {
        return (<div>
            <Switch>
                <Route exact path="/home" component={ArticleListComponent}/>
                <Route exact path="/about" component={AboutMeComponent}/>
                <Route exact path="/friends" component={FriendsComponent}/>
                <Route exact path="/article/:id" component={ArticleComponent}/>
                <Route path="/" component={ArticleListComponent}/>
            </Switch>
        </div>)
    }
}