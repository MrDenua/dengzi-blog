import * as React from "react";
import {RouteComponentProps} from "react-router";
import ArticleListComponent from "../component/ArticleListComponent";

type C = React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;

export let MainRouterConf = new Map<string, C>(
    ["/", ArticleListComponent],
    ["/home", ArticleListComponent]
);