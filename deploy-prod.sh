#!/bin/bash

# Function to run sudo commands with password
run_sudo() {
    echo 'pow855bow133' | sudo -S $@
}

# Stop all containers
run_sudo docker stop $(sudo docker ps -aq) || true
run_sudo docker rm $(sudo docker ps -aq) || true

# Clean up networks and volumes
run_sudo docker network prune -f
run_sudo docker volume prune -f

# Stop local PostgreSQL if running
run_sudo systemctl stop postgresql || true

# Create .env.production if it doesn't exist
if [ ! -f .env.production ]; then
  cat > .env.production << EOL
POSTGRES_USER=veganeiro_prod
POSTGRES_PASSWORD=veganeiro123
POSTGRES_DB=veganeiro_prod
NODE_ENV=production
EOL
fi

# Deploy with docker-compose
run_sudo docker-compose -f docker-compose.production.yml up -d --build --force-recreate
