#!/bin/zsh

go run github.com/99designs/gqlgen generate
go mod tidy
