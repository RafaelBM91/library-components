.DEFAULT_GOAL := help

include .env
export  $(shell sed 's/=.*//' .env)

build-image: ## Build Image Production (daemon)
	docker build \
	--tag library-components:latest \
	.

install: ## Install Dependencies
	docker run -it --rm \
	--name=${PROJECT_NAME}-service \
	-v ${PWD}:/var/app \
	-w /var/app \
	--env-file=${PWD}/.env \
	node:latest \
	npm install

compile: ## Service Compile To Production
	docker run -it --rm \
	--name=${PROJECT_NAME}-service \
	-v ${PWD}:/var/app \
	-w /var/app \
	--env-file=${PWD}/.env \
	node:latest \
	npm run build

up: ## Run Container Production (daemon)
	docker run -d --rm \
	--name=${PROJECT_NAME} \
	-p 80:80 \
	-e PORT=80 \
	library-components:latest

up-dev: ## Run Container Development (iterative)
	docker run -it --rm \
	--name=${PROJECT_NAME} \
	-p 6006:6006 \
	-v ${PWD}:/var/app \
	-w /var/app \
	--env-file=${PWD}/.env \
	node:latest \
	npm run start-storybook

down: ## Down Container
	docker ps -aq -f name=${PROJECT_NAME} -f status=running | xargs -r docker stop

deploy: install compile up ## Run Deploy Image

logs: ## Show Logs Container
	docker logs ${PROJECT_NAME} --details --follow --tail="all"

help: ## Help Make's Tags
	@printf "\033[31m%-22s %-59s %s\033[0m\n" "Target" " Help"; \
	printf "\033[31m%-22s %-59s %s\033[0m\n"  "------" " ----"; \
	grep -hE '^\S+:.*## .*$$' $(MAKEFILE_LIST) | sed -e 's/:.*##\s*/:/' | sort | awk 'BEGIN {FS = ":"}; {printf "\033[32m%-22s\033[0m %-58s \033[34m%s\033[0m\n", $$1, $$2, $$3}'
