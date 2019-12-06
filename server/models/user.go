package models

type User struct {
	Name      string    `json:"name"`
	Avatar    string    `json:"avatar"`
	Bio       string    `json:"bio"`
	Links     []*string `json:"links"`
	Likes     int32     `json:"likes"`
	Follower  int32     `json:"follower"`
	Following int32     `json:"following"`
	PassWd    string    `json:"passWd"`
}

func GetUser(name string, passwd string) *User {
	user := new(User)
	user.Name = name
	user.Bio = "aaaa"
	user.Likes = 10
	user.Follower = 23
	//if err := database.DB.Preload("Role").First(user).Error; err != nil {
	//	log.Fatal(err)
	//}

	return user
}

func init() {

}
