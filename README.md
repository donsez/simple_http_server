# Simple HTTP server

## Install Docker CE and Docker Compose

## Build and start the container
```bash
git clone https://github.com/donsez/simple_http_server.git
cd simple_http_server
docker-compose up -d
docker-compose ps
docker-compose logs -f
```

## Stop the container
```bash
docker-compose stop
docker-compose ps
```

## Restart the container
```bash
docker-compose start
docker-compose ps
```

## Rebuild and restart the container
```bash
docker-compose up -d --build
docker-compose ps
docker-compose logs -f
```