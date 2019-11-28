package router

import (
	"astaxie/beego"
	controllers2 "com.dengzii.blog/controllers"
)

func init() {

	beego.Router("", &controllers2.MainController{})

	//ns := beego.NewNamespace("*", beego.NSNamespace("/", &controllers.MainController{}, ""))
	//beego.AddNamespace(ns)

}
