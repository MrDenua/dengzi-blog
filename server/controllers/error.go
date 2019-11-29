package controllers

import "github.com/kataras/iris/context"

func ErrorController(ctx context.Context) {
	ctx.WriteString("Error=>" + ctx.Path())
}
