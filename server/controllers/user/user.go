package user

import (
	"github.com/kataras/iris"
	"github.com/kataras/iris/context"
	"server/controllers"
)

type loginForm struct {
	Name    string `json:"name"`
	Passwd  string `json:"passwd"`
	Captcha string `json:"captcha"`
}

func LoginController(ctx context.Context) (err error) {

	var requestUser loginForm
	//var user = models.GetUser(requestUser.Name, requestUser.Passwd)

	err = ctx.ReadJSON(&requestUser)
	response := controllers.CommonJson(300, "try again", requestUser)
	ctx.StatusCode(iris.StatusOK)
	if requestUser.Name == "dengzi" {
		response.Status = 200
		response.Msg = "login success"
		_, err = ctx.JSON(response)
	} else {
		_, err = ctx.JSON(response)
	}
	return err
}
