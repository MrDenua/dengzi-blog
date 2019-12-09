package models

import "server/db"

type User struct {
	Id         uint
	Name       string `gorm:"not null VARCHAR(191)"`
	Avatar     string `gorm:"not null VARCHAR(191)"`
	Email      string `gorm:"not null VARCHAR(191)"`
	Bio        string `gorm:"not null VARCHAR(191)"`
	Links      string `gorm:"not null INT(191)"`
	Likes      int32  `gorm:"not null INT(191)"`
	Follower   int32  `gorm:"not null INT(191)"`
	Following  int32  `gorm:"not null INT(191)"`
	PassWd     string `gorm:"not null VARCHAR(191)"`
	CreateDate string
}

func GetUser(name string, passwd string) *User {
	var user User
	tab := []interface{}{&User{}}
	db.CreateTable(tab)
	db.Mysql.Where("name = ? AND pass_wd = ?", name, passwd).Find(&user)
	return &user
}

func IsUserExists(name string) (exists bool) {
	var user User
	db.Mysql.Where("name = ?", name).Find(&user).Limit(1)
	return user.Id != 0
}

func CreateUser(name string, passwd string, email string) *User {
	tab := []interface{}{&User{}}
	db.CreateTable(tab)

	user := &User{
		Name:   name,
		Email:  email,
		PassWd: passwd,
	}
	db.Insert(user)
	return user
}

func init() {

}
