package com_dengzii_blog

import (
	controllers2 "com.dengzii.blog/controllers"
	"fmt"
	"github.com/astaxie/beego"
	"github.com/astaxie/beego/orm"
	_ "github.com/go-sql-driver/mysql"
)

func init() {

	initDb()
}

//noinspection ALL
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

	beego.Router("/", &controllers2.MainController{})
	beego.Router("/home", &controllers2.MainController{})
	beego.ErrorController(&controllers2.ErrorController{})
	beego.Run()
}
