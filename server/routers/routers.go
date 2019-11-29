package routers

import (
	"github.com/kataras/iris"
	"github.com/kataras/iris/context"
	"server/controllers"
)

func Setup(app *iris.Application) {

	app.Handle("GET", "/", controllers.HomeController)

	app.OnAnyErrorCode(controllers.ErrorController)
	app.Handle("GET", "/friends", func(context context.Context) {
		_, _ = context.JSON(iris.Map{
			"status": "200",
			"msg":    "ok",
		})
	})

}

func init() {

}
