package user

import (
	"github.com/kataras/iris/context"
	"log"
)

type loginForm struct {
	name    string
	passwd  string
	captcha string
}

func LoginController(ctx context.Context) {

	var user loginForm
	err := ctx.ReadJSON(&user)
	if err != nil {
		log.Fatal(err)
	}
}
