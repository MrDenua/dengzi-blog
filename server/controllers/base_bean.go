package controllers

type BaseModel struct {
	Status int      `json:"statuc"`
	Msg    string   `json:"msg"`
	Data   struct{} `json:"data"`
}
