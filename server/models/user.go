package models

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

}
