package controllers

import "github.com/kataras/iris/context"

func HomeController(ctx context.Context) {
	_, _ = ctx.HTML(
		"<h1>Index</h1><br><a href='/home'>home</a><br>" +
			"<a href='/category'>catorey</a><br>" +
			"<a href='/friends'>friends</a><br>" +
			"<a href='/about'>about</a><br>")
}
