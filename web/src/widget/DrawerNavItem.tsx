import React from "react";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import {Box} from "@material-ui/core";
import {ExpandLess, ExpandMore} from "@material-ui/icons";

const style = {
    link: {
        display: "block",
        color: "black",
        width: "100%",
        textDecoration: "none"
    },
    child: {
        paddingLeft: "32px"
    }
};

type OnSelectListener = (path: string) => void;

export type NavItem = {
    title: string;
    path: string;
    currentPath: string;
    onSelect: OnSelectListener;
    child?: NavItem[];
    parent?: NavItem;
}

export type NavItemEmpty = {}

export default class DrawerNavItem extends React.Component<NavItem, { expand: boolean }> {

    constructor(props: Readonly<NavItem>) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.isCurrentPath = this.isCurrentPath.bind(this);
        this.state = {expand: false};
    }

    handleItemClick(e: React.MouseEvent): void {
        e.preventDefault();
        if (this.hasChild()) {
            this.setState({expand: !this.state.expand});
            return;
        }
        if (this.props.onSelect !== undefined) {
            this.props.onSelect(this.props.path);
        }
    }

    render() {
        let item: JSX.Element;
        let child: JSX.Element | null = null;
        let iconRight: JSX.Element | null = null;
        let iconLeft: JSX.Element | null = null;

        // iconLeft = (<ListItemIcon><ExpandMore/></ListItemIcon>);

        if (this.hasChild()) {
            iconRight = this.state.expand ? <ExpandLess/> : <ExpandMore/>
        }
        item = (
            <ListItem button key={this.props.path} selected={this.isCurrentPath()}
                      onClick={this.handleItemClick}
                      style={this.props.parent !== undefined ? style.child : {}}>
                {iconLeft}
                <Link to={this.hasChild() ? "#" : this.props.path} style={style.link}>
                    <ListItemText primary={this.props.title}/>
                </Link>
                {iconRight}
            </ListItem>
        );

        if (this.hasChild(this.props.child)) {
            child = (
                <Collapse in={this.state.expand} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {(this.props.child.map((item) => (
                            <DrawerNavItem currentPath={this.props.currentPath} onSelect={this.props.onSelect}
                                           title={item.title} path={item.path} parent={item} key={item.path}/>
                        )))}
                    </List>
                </Collapse>
            );
        }

        return (<Box>{item}{child}</Box>)
    }

    private isCurrentPath(): boolean {
        return this.props.currentPath === this.props.path;
    }

    private hasChild(c: NavItem[] | undefined = this.props.child): c is NavItem[] {
        return typeof c !== "undefined" && c.length > 0;
    }
}
