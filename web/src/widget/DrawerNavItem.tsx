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

export type NavItem = {
    title: string;
    path: string;
    child?: NavItem[];
    parent?: NavItem;
}

export default class DrawerNavItem extends React.Component<NavItem, { expand: boolean, selected: boolean }> {

    constructor(props: Readonly<NavItem>) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.isCurrentPath = this.isCurrentPath.bind(this);
        this.state = {expand: false, selected: this.isCurrentPath()}
    }

    handleItemClick(e: React.MouseEvent): void {
        e.preventDefault();
        this.setState({
            expand: !this.state.expand,
            selected: this.hasChild() ? false : this.isCurrentPath()
        });
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
            <ListItem button key={this.props.path} selected={this.state.selected}
                      onClick={this.handleItemClick}
                      style={this.props.parent !== undefined ? style.child : {}}>
                {iconLeft}
                <Link to={this.props.path} style={style.link}>
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
                            <DrawerNavItem title={item.title} path={item.path} parent={item}/>
                        )))}
                    </List>
                </Collapse>
            );
        }

        return (<Box>{item}{child}</Box>)
    }

    private isCurrentPath(): boolean {
        return window.location.pathname.toLowerCase() === this.props.path;
    }

    private hasChild(c: NavItem[] | undefined = this.props.child): c is NavItem[] {
        return typeof c !== "undefined" && c.length > 0;
    }
}
