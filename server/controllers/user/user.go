package user

import (
	"github.com/kataras/iris/context"
	"log"
	"server/controllers"
	"server/models"
)

type loginForm struct {
	name    string
	passwd  string
	captcha string
}

func LoginController(ctx context.Context) {

	var requestUser loginForm
	var result = models.User{}

	err := ctx.ReadForm(&requestUser)
	if err != nil {
		log.Fatal(err)
		return
	}
	if requestUser.name == "dengzi" {
		result.Name = "dengzi"
		result.Bio = "Try your best and be best you!"
		result.Follower = 22
		ctx.JSON(result)
		return
	}

	var response = controllers.BaseBean{
		Status: 300,
		Msg:    "Unknow username," + requestUser.name,
	}
	ctx.JSON(response)
}
