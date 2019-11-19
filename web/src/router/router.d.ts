import * as React from "react";
import {RouteComponentProps} from "react-router";
import ArticleListComponent from "../component/ArticleListComponent";
import FriendsComponent from "../component/FriendsComponent";
import ArchiveComponent from "../component/ArchiveComponent";
import AboutMeComponent from "../component/AboutMeComponent";

type C = React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;

export let RouteConfig = [{
    path: "/",
    indexRoute: {component: ArticleListComponent},
    childRoutes: [
        {path: 'home', component: ArticleListComponent},
        {path: 'friends', component: FriendsComponent},
        {path: 'category/:c', component: ArticleListComponent},
        {path: 'about', component: AboutMeComponent},
        {path: 'archive', component: ArchiveComponent},
        {path: 'about', component: AboutMeComponent},
    ]
}];