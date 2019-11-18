import React from "react";
import {Route} from "react-router";
import ArticleListComponent from "../component/ArticleListComponent";
import AboutMeComponent from "../component/AboutMeComponent";
import FriendsComponent from "../component/FriendsComponent";

export default class MainRouter extends React.Component {

    render() {
        return (<div>
            <Route path="/">
                <Route exact path="/" component={ArticleListComponent}/>
                <Route exact path="/home" component={ArticleListComponent}/>
                <Route exact path="/about" component={AboutMeComponent}/>
                <Route exact path="/friends" component={FriendsComponent}/>
                <Route exact path="/article:id" component={ArticleListComponent}/>
            </Route>
        </div>)
    }
}