package controllers

import "github.com/astaxie/beego"

type HomeController struct {
	beego.Controller
}

func (this *HomeController) Get() {

	this.Data["user"] = "TomCat"
	this.TplName = "home.tpl"
}

func init() {
	beego.Router("/home", &HomeController{})
}
