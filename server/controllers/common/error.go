package common

import "github.com/kataras/iris/context"

func ServerErrorController(ctx context.Context) {
	msg := ctx.Values().GetString("error")
	_, _ = ctx.Writef("<h1 style='color:red;'>Internal Server Error : %s</h1>", msg)
}

func NotFoundController(ctx context.Context) {
	_, _ = ctx.Writef("<h1 style='color:red;'>Not Found Path  %s</h1>", ctx.Path())
}
