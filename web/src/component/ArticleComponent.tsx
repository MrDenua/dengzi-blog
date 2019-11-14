import React from "react";
import {Article} from "./ArticleListComponent";
import {Card} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

class ArticleComponent extends React.Component<{ article: Article }, any> {

    private _article: Article;

    constructor(props: { article: Article }, context: any) {
        super(props, context);
        this._article = props.article;
    }

    render() {
        return (<Box paddingBottom={"16px"}>
            <Card>
                <CardContent>
                    <Typography color="textPrimary" gutterBottom variant={"h5"}
                                component={"h2"}>{this._article.title}</Typography>
                    <Typography color={"textSecondary"}
                                component={"p"}
                                variant={"subtitle2"}>{this._article.date.toLocaleTimeString()}</Typography>
                    <Typography color="textSecondary" variant={"body1"}
                                component={"p"}>{this._article.content}</Typography>
                </CardContent>
                <CardActions>
                    <Button size={"small"} color={"primary"}>Read More</Button>
                </CardActions>
            </Card>
        </Box>);
    }
}

export default ArticleComponent