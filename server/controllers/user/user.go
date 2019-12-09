package user

import (
	"github.com/kataras/iris/context"
	"server/controllers"
	"server/models"
)

type loginJson struct {
	Name    string `json:"name" validate:"required,gte=2,lte=50"`
	Passwd  string `json:"passwd" validate:"required"`
	Captcha string `json:"captcha"`
}

func LoginController(ctx context.Context) (err error) {

	var requestUser loginJson

	err = ctx.ReadJSON(&requestUser)
	var user = models.GetUser(requestUser.Name, requestUser.Passwd)

	response := controllers.CommonJson(400, "wrong password or username", nil)
	if user.Id != 0 {
		response.Status = 200
		response.Msg = "success"
		response.Data = user
	}
	_, err = ctx.JSON(response)
	return err
}

type registerJson struct {
	Name    string `json:"name" validate:"required,gte=2,lte=50"`
	Passwd  string `json:"passwd" validate:"required"`
	Email   string `json:"email"`
	Captcha string `json:"captcha"`
}

func Register(ctx context.Context) (err error) {

	var user registerJson
	err = ctx.ReadJSON(&user)
	if err != nil {
		return err
	}
	if models.IsUserExists(user.Name) {

	}
	_, err = ctx.JSON(models.CreateUser(user.Name, user.Passwd, user.Email))
	return err
}
