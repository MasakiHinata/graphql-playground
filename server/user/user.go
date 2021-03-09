package user

import (
	"fmt"
	"github.com/MasakiHinata/go/graphql/graph/model"
	"log"
)

var users = map[string]model.User{}

func GetUsers() []*model.User {
	v := make([]*model.User, len(users))
	for _, user := range users {
		v = append(v, &user)
	}
	return v
}

func GetUser(id *string) (*model.User, error) {
	user, ok := users[*id]
	if ok {
		return &user, nil
	} else {
		return nil, fmt.Errorf("cannot find user: id=%s", *id)
	}
}

func AddUser(id *string, name *string, age *int) *model.User {
	user := model.User{ID: *id, Name: *name, Age: *age}
	users[*id] = user
	log.Println("User added:", user)
	return &user
}

func DeleteUser(id *string) (*model.User, error) {
	user, err := GetUser(id)
	if err != nil {
		return nil, err
	}
	delete(users, *id)
	log.Println("User deleted:", *user)
	return user, nil
}
