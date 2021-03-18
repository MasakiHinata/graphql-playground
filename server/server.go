package main

import (
	"fmt"
	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/MasakiHinata/go/graphql/graph"
	"github.com/MasakiHinata/go/graphql/graph/generated"
	"github.com/rs/cors"
	"log"
	"net/http"
)

func main() {
	port := 8080
	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{}}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))

	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"},
		AllowCredentials: true,
	})

	http.Handle("/query", c.Handler(srv))

	log.Printf("connect to http://localhost:%d/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", port), nil))
}
