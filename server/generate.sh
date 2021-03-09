#!/bin/zsh

rm -r ./graph
mkdir ./graph
cp ../graph/* ./graph
go run github.com/99designs/gqlgen generate
go mod tidy
