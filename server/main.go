package main

import (
	"fmt"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/context"
)

type MainController struct {
	beego.Controller
}

func (this *MainController) Get() {

	request := this.Ctx.Request
	fmt.Println(request.Proto, request.Method, request.Host, request.URL.RawPath)
	this.Ctx.WriteString("<h1>Hello World</h1>")
}

type RouterX struct {
	beego.ControllerInterface
}

func (this RouterX) Init(ct *context.Context, controllerName, actionName string, app interface{}) {
	fmt.Println(ct.Request.URL)
	fmt.Println(controllerName, actionName)
}

func (this RouterX) Get() {
	fmt.Println("GETTTf")
}

func main() {
	beego.AutoRouter(&RouterX{})
	beego.Router("/", &MainController{})
	beego.Run()
}
