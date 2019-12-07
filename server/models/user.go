package models

import "server/db"

type User struct {
	ID         uint
	Name       string `json:"name"`
	Avatar     string `json:"avatar"`
	Email      string `json:"email"`
	Bio        string `json:"bio"`
	Links      string `json:"links"`
	Likes      int32  `json:"likes"`
	Follower   int32  `json:"follower"`
	Following  int32  `json:"following"`
	PassWd     string
	CreateDate string
}

func GetUser(name string, passwd string) *User {
	tab := []interface{}{&User{}}
	db.CreateTable(tab)
	var u User
	db.Mysql.Where("name = ? AND pass_wd = ?", name, passwd).Find(&u)
	return &u
}

func AddUser(name string, passwd string, email string) *User {
	tab := []interface{}{&User{}}
	db.CreateTable(tab)
	user := &User{
		Name:      name,
		Email:     email,
		Avatar:    "",
		Bio:       "",
		Links:     "",
		Likes:     0,
		Follower:  0,
		Following: 0,
		PassWd:    passwd,
	}
	db.Insert(user)
	return user
}

func init() {

}
