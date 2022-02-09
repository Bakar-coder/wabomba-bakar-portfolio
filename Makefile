build_network:
	docker network create app-network

build_app:
	docker build -t nodeapp . && \
	docker run -d \
		--name client \
		-e APPID=3000 \
		--network app-network \
		--restart unless-stopped \
		nodeapp

build_proxy:
	cd haproxy && \
	docker build -t app-proxy . && \
	docker run -d \
		-p 80:80 \
		-v ./haproxy:/usr/local/etc/haproxy:ro \
		--name app-proxy \
		--network app-network \
		--restart unless-stopped \
		app-proxy

build_database:
	docker run -d \
		--name app-database \
		-v app_data:/var/lib/postgres/data \
		--network app-network \
		-e POSTGRES_PASSWORD=password \
		--restart unless-stopped \
		postgres:14.0-alpine

build_redis:
	docker run -d \
		--name app-redis \
		-v app_redis:/data \
		--network app-network \
		-e REDIS_PASSWORD=password \
		--restart unless-stopped \
		redis:6.2.5-alpine

cleanup:
	docker system prune -f && \
	docker volume prune -f