#!/bin/bash

# Stop and remove all containers
sudo docker stop $(sudo docker ps -aq)
sudo docker rm $(sudo docker ps -aq)

# Clean up networks and volumes
sudo docker network prune -f
sudo docker volume prune -f

# Stop local PostgreSQL if running
sudo systemctl stop postgresql || true

# Create .env.production file
cat > .env.production << EOL
POSTGRES_USER=veganeiro_prod
POSTGRES_PASSWORD=veganeiro123
POSTGRES_DB=veganeiro_prod
NODE_ENV=production
EOL

# Deploy with docker-compose
sudo docker-compose -f docker-compose.production.yml up -d --build --force-recreate
