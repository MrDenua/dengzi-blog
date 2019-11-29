package routers

import (
	"astaxie/beego"
	"server/controllers"
)

func init() {

	beego.Router("", &controllers.MainController{})

	//ns := beego.NewNamespace("*", beego.NSNamespace("/", &controllers.MainController{}, ""))
	//beego.AddNamespace(ns)

}
