package controllers

import (
	"github.com/astaxie/beego"
	"pkg/errors"
)

type ErrorController struct {
	beego.Controller
}

func (c *ErrorController) RetError(e error) {
	c.Data["json"] = "{\"status\":404}"
	c.ServeJSON()
}

func (c *ErrorController) Error404() {
	c.RetError(errors.New("404"))
}
