package controllers

import (
	"github.com/astaxie/beego"
	"log"
)

type MainController struct {
	beego.Controller
}

func (m *MainController) Get() {
	m.TplName = "index.html"
	err := m.Render()
	if err != nil {
		log.Fatal(err)
	}
}
