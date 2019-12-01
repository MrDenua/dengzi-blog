package controllers

type BaseBean struct {
	Status int      `json:"statuc"`
	Msg    string   `json:"msg"`
	Data   struct{} `json:"data"`
}
