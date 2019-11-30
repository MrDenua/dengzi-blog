package main

import (
	"github.com/kataras/iris"
	"github.com/kataras/iris/middleware/logger"
	"github.com/kataras/iris/middleware/recover"
	"server/routers"
)

var app *iris.Application

func middleWareHandle(ctx iris.Context) {
	ctx.Next()
}

func debug() {
	app.Logger().SetLevel("debug")
	app.Use(recover.New())
	app.Use(logger.New())
}

func static() {
	app.StaticHandler("./static", false, false)
}

func main() {

	app = iris.New()
	app.RegisterView(iris.HTML("./views", ".html").Reload(true))
	app.Use(middleWareHandle)
	debug()
	static()
	routers.Setup(app)
	_ = app.Run(iris.Addr(":80"), iris.WithoutServerError(iris.ErrServerClosed))
}
