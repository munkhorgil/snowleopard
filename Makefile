.PHONY: all init format lint

all: help

format:
	npm run lint
	npx lint-staged

help:
	@echo '----'
	@echo 'format              - run code formatters'
	@echo '----'