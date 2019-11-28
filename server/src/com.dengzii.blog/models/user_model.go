package models

import "github.com/astaxie/beego/orm"

type User struct {
	Name      string
	Avatar    string
	Bio       string
	Links     []*string
	Likes     int32
	Follower  int32
	Following int32
	PassWd    string
}

func init() {
	orm.RegisterModel(new(User))
}
