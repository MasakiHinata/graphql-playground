package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/MasakiHinata/go/graphql/graph/generated"
	"github.com/MasakiHinata/go/graphql/graph/model"
	"github.com/MasakiHinata/go/graphql/user"
)

func (r *mutationResolver) AddUser(ctx context.Context, id *string, name *string, age *int) (*model.User, error) {
	return user.AddUser(id, name, age), nil
}

func (r *mutationResolver) DeleteUser(ctx context.Context, id *string) (*model.User, error) {
	return user.DeleteUser(id)
}

func (r *queryResolver) Version(ctx context.Context) (string, error) {
	return "1.0", nil
}

func (r *queryResolver) Users(ctx context.Context) ([]*model.User, error) {
	return user.GetUsers(), nil
}

func (r *queryResolver) User(ctx context.Context, id *string) (*model.User, error) {
	return user.GetUser(id)
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
