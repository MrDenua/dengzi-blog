package routers

import (
	"github.com/kataras/iris"
	"github.com/kataras/iris/context"
	"log"
	"server/controllers"
	"server/controllers/common"
)

func Setup(app *iris.Application) {

	app.Use(common.AuthorityController)
	app.Handle("GET", "/", controllers.HomeController)

	app.Handle("GET", "/friends", func(context context.Context) {
		_, _ = context.JSON(iris.Map{
			"status": "200",
			"msg":    "ok",
		})
	})
	app.WildcardSubdomain(subdomainRouter)

	errorRouter(app)
	staticRouter(app)
}

func subdomainRouter(ctx context.Context) {
	ctx.Application().Logger().Info("=> " + ctx.Subdomain())
}

func errorRouter(app *iris.Application) {
	app.OnErrorCode(iris.StatusInternalServerError, common.ServerErrorController)
	app.OnErrorCode(iris.StatusNotFound, common.NotFoundController)

}

func staticRouter(app *iris.Application) {
	app.Get("/static/{f:string}", func(context context.Context) {
		err := context.ServeFile("./static/a.png", false)
		if err != nil {
			log.Fatal(err)
		}
	})
}

func init() {

}
