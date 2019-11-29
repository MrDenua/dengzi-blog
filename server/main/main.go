package main

//
import (
	"github.com/kataras/iris"
	"github.com/kataras/iris/context"
	"github.com/kataras/iris/middleware/logger"
	"github.com/kataras/iris/middleware/recover"
)

//

func main() {

	app := iris.New()
	//app.Logger().SetLevel("debug")
	app.Use(recover.New())
	app.Use(logger.New())

	app.Handle("GET", "/", func(context iris.Context) {
		_, _ = context.HTML("<h1>Index</h1><a href='/home'>home</a>" +
			"<a href='/category'>catorey</a>" +
			"<a href='/friends'>friends</a>" +
			"<a href='/about'>about</a>")
	})

	app.Handle("GET", "/friends", func(context context.Context) {
		_, _ = context.JSON(iris.Map{
			"status": "200",
			"msg":    "ok",
		})
	})

	_ = app.Run(iris.Addr(":80"), iris.WithoutServerError(iris.ErrServerClosed))
}
