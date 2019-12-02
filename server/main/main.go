package main

import (
	"github.com/kataras/iris"
	"server/bootstrap"
	"server/routers"
)

var app *iris.Application

func main() {

	app := bootstrap.New("dengzi's blog", "dengzi", true)

	app.SetupViews("./views")
	app.SetupErrorHandlers()
	app.Bootstrap()

	routers.Setup(app)
	app.Listen(":80",
		iris.WithCharset("UTF-8"),
		iris.WithoutServerError(iris.ErrServerClosed))
}
