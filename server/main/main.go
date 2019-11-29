package main

//
import (
	"github.com/kataras/iris"
	"github.com/kataras/iris/middleware/logger"
	"github.com/kataras/iris/middleware/recover"
	"server/routers"
)

//

func main() {

	app := iris.New()
	app.Logger()
	app.Use(recover.New())
	app.Use(logger.New())

	routers.Setup(app)

	_ = app.Run(iris.Addr(":80"), iris.WithoutServerError(iris.ErrServerClosed))
}
