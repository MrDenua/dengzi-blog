package main

import (
	"fmt"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
	_ "github.com/go-sql-driver/mysql"
)

type MainController struct {
	beego.Controller
}

func (this *MainController) Get() {

	request := this.Ctx.Request
	fmt.Println(request.Proto, request.Method, request.Host, request.URL.RawPath)
	this.TplName = "index.tpl"
}

func init() {

}

func initDb() {
	dbUser := beego.AppConfig.String("mysqluser")
	dbPass := beego.AppConfig.String("mysqlpass")
	dbUrl := beego.AppConfig.String("mysqlurls")
	dbName := beego.AppConfig.String("mysqldb")

	err := orm.RegisterDriver("mysql", orm.DRMySQL)
	if err != nil {
		fmt.Println("database error", err)
		return
	}

	err1 := orm.RegisterDataBase("default", "mysql",
		dbUser+":"+dbUrl+"@/"+dbName+"?charset=utf8&passwd="+dbPass)
	if err1 != nil {
		fmt.Println(err1)
	}
}

func main() {

	beego.Router("/", &MainController{})
	beego.Run()
}
