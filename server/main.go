package main

import (
	"astaxie/beego"
	"astaxie/beego/orm"
	"fmt"
	_ "go-sql-driver/mysql"
	"server/controllers"
)

func init() {
	initDb()
}

//noinspection ALL
func initDb() {
	mysql_url := beego.AppConfig.String("mysql_url")

	err := orm.RegisterDriver("mysql", orm.DRMySQL)
	if err != nil {
		fmt.Println("database error", err)
		return
	}
	err1 := orm.RegisterDataBase("default", "mysql", mysql_url)
	if err1 != nil {
		fmt.Println(err1)
	}
}

func main() {

	beego.Router("/", &controllers.MainController{})
	beego.Router("/home", &controllers.MainController{})
	beego.ErrorController(&controllers.ErrorController{})
	beego.Run()
}
