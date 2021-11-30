.PHONY: help setup run test build docker-build docker-run docker-kill lint update-dependencies

NPM ?= $(shell which npm)
YARN := $(shell which yarn)
PKG_MANAGER ?= $(if $(YARN),$(YARN),$(NPM))

help: ## Show help.
	@printf "A set of development commands.\n"
	@printf "\nUsage:\n"
	@printf "\t make \033[36m<commands>\033[0m\n"
	@printf "\nThe Commands are:\n\n"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\t\033[36m%-30s\033[0m %s\n", $$1, $$2}'

setup: ## Setup application.
	@yarn

run: ## Run local application.
	@yarn run start

test: ## Run tests.
	@yarn run test

build: ## Build application.
	@yarn run build

docker-build: ## Build container's Docker.
	@docker build -t app .

docker-run: ## Run container's Docker.
	@docker run --name photo-album -p 3000:3000 -it app

docker-kill: ## Kill container's Docker.
	@docker kill photo-album

lint: ## Run lint.
	@yarn run lint
