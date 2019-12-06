package routers

import (
	"github.com/kataras/iris"
	"github.com/kataras/iris/context"
	"log"
	"server/bootstrap"
	"server/controllers"
	"server/controllers/common"
	"server/controllers/user"
)

func Setup(app *bootstrap.Bootstrapper) {

	app.Use(common.AuthorityController)
	app.Handle("GET", "/", controllers.HomeController)

	app.Handle("GET", "/friends", func(context context.Context) {
		_, _ = context.JSON(iris.Map{
			"status": "200",
			"msg":    "ok",
		})
	})

	app.Handle("POST", "/login", func(i context.Context) {
		err := user.LoginController(i)
		if err != nil {
			i.WriteString("error," + err.Error())
		}
	})
	app.Handle("GET", "/login", func(i context.Context) {
		i.View("login.html")
	})
	app.WildcardSubdomain(subdomainRouter)

	errorRouter(app)
	staticRouter(app)
}

func subdomainRouter(ctx context.Context) {
	ctx.Application().Logger().Info("=> " + ctx.Subdomain())
}

func errorRouter(app *bootstrap.Bootstrapper) {
	app.OnErrorCode(iris.StatusInternalServerError, common.ServerErrorController)
	app.OnErrorCode(iris.StatusNotFound, common.NotFoundController)

}

func staticRouter(app *bootstrap.Bootstrapper) {
	app.Get("/static/{f:string}", func(context context.Context) {
		err := context.ServeFile("./static/a.png", false)
		if err != nil {
			log.Fatal(err)
		}
	})
}

func init() {

}
