.PHONY: build-smart-developers-development
build-smart-developers-development:
	@echo "Building development environment..."
	docker compose -f docker/development/docker-compose.yml build

.PHONY: start-smart-developers-development
start-smart-developers-development:
	@echo "Starting development environment..."
	docker compose -f docker/development/docker-compose.yml up --force-recreate

.PHONY: stop-smart-developers-development
stop-smart-developers-development:
	@echo "Stopping development environment..."
	docker compose -f docker/development/docker-compose.yml down --volumes --remove-orphans

.PHONY: logs-smart-developers-development
logs-smart-developers-development:
	@echo "Tailing development environment logs..."
	docker compose -f docker/development/docker-compose.yml logs -f

.PHONY: healthcheck-smart-developers-development
healthcheck-smart-developers-development:
	@echo "Running health check for development environment..."
	docker compose -f docker/development/docker-compose.yml ps


.PHONY: build-smart-developers-production
build-smart-developers-production:
	@echo "Building production environment..."
	docker compose -f docker/production/docker-compose.yml build

.PHONY: start-smart-developers-production
start-smart-developers-production:
	@echo "Starting production environment..."
	docker compose -f docker/production/docker-compose.yml up -d

.PHONY: stop-smart-developers-production
stop-smart-developers-production:
	@echo "Stopping production environment..."
	docker compose -f docker/production/docker-compose.yml down --volumes --remove-orphans

.PHONY: logs-smart-developers-production
logs-smart-developers-production:
	@echo "Tailing production environment logs..."
	docker compose -f docker/production/docker-compose.yml logs -f

.PHONY: healthcheck-smart-developers-production
healthcheck-smart-developers-production:
	@echo "Running health check for production environment..."
	docker compose -f docker/production/docker-compose.yml ps

.PHONY: clean-secrets
clean-secrets:
	@echo "Cleaning up Docker secrets..."
	rm -rf ./secrets/*

.PHONY: prune
prune:
	@echo "Pruning unused Docker resources..."
	docker system prune -f --volumes

.PHONY: healthcheck
healthcheck:
	@echo "Running health check for all services..."
	docker compose ps

.PHONY: restart
restart:
	@echo "Restarting all services..."
	docker compose down --volumes --remove-orphans && docker compose up -d