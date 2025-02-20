# Deployment Guide

This guide covers the deployment process for the Veganeiro web application. The application is containerized using Docker and can be deployed using Docker Compose.

## Prerequisites

- Docker and Docker Compose installed on the server
- Git access to the repository
- SSH access to the deployment server
- SSL certificates (for production)

## Environment Setup

1. Clone the repository:
```bash
git clone git@github.com:dominguesh/veganeiro-webapp.git
cd veganeiro-webapp
```

2. Create environment files:
```bash
# Development
cp .env.example .env.local

# Production
cp .env.production.example .env.production
```

3. Configure environment variables in `.env.production`:
```env
# Database Configuration
POSTGRES_USER=veganeiro_prod
POSTGRES_PASSWORD=your_secure_password
POSTGRES_DB=veganeiro_prod

# Node Environment
NODE_ENV=production

# Database URL (used by backend)
DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@db:5432/${POSTGRES_DB}?schema=public

# Server Configuration
PORT=5000
```

## Database Migration

The application uses Prisma for database management. Migrations are automatically handled during container startup, but you can also run them manually:

```bash
# Generate Prisma client
npx prisma generate

# Deploy migrations
npx prisma migrate deploy
```

## Docker Configuration

### Backend Service

The backend service runs on port 5000 and includes:
- Node.js application
- Prisma ORM
- PostgreSQL client
- Automatic database migrations

```dockerfile
# backend/Dockerfile
FROM node:18-alpine
RUN apk add --no-cache python3 make g++ openssl
WORKDIR /app
COPY package*.json tsconfig.json ./
RUN npm install
COPY prisma ./prisma/
COPY src ./src/
RUN npm run build
ENV NODE_ENV=production
RUN npx prisma generate
EXPOSE 5000
CMD npx prisma migrate deploy && npm start
```

### Frontend Service

The frontend service runs on port 3000 and includes:
- Next.js application
- TailwindCSS
- TypeScript compilation

### Database Service

PostgreSQL database running on port 5432 with:
- Persistent volume storage
- User authentication
- Automatic schema initialization
- Health checks

## Deployment Steps

1. **Prepare the deployment environment**:
```bash
# Stop any running containers and clean up
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker network prune -f
docker volume prune -f

# If running PostgreSQL locally, stop it to avoid port conflicts
sudo systemctl stop postgresql
```

2. **Deploy using Docker Compose**:
```bash
# Build and start all services
docker-compose -f docker-compose.production.yml up -d --build
```

3. **Verify deployment**:
```bash
# Check container status
docker ps

# Check backend health
curl http://localhost:5000/api/v1/health

# Check frontend
curl http://localhost:3000
```

## Port Configuration

- Frontend: 3000
- Backend: 5000 (changed from 4000 to match server configuration)
- Database: 5432

## Health Checks

The application provides health check endpoints:

```bash
# Backend health check
GET /api/v1/health

# Expected response
{
  "status": "ok",
  "timestamp": "2025-02-17T05:27:16.606Z"
}
```

## Troubleshooting

1. **Database Connection Issues**:
   - Verify database credentials in environment variables
   - Check if database container is running: `docker logs veganeiro-webapp_db_1`
   - Ensure database migrations have been applied
   - Check database logs for connection errors
   - Verify network connectivity between containers

2. **Container Startup Issues**:
   - Check container logs: `docker logs <container_name>`
   - Verify network connectivity between containers
   - Ensure all required environment variables are set
   - Check if ports are already in use

3. **Port Conflicts**:
   - Stop local PostgreSQL if running: `sudo systemctl stop postgresql`
   - Check for services using the required ports
   - Modify port mappings in docker-compose.yml if needed

## Monitoring

Monitor the application using Docker's built-in tools:

```bash
# View container logs
docker logs -f veganeiro-webapp_backend_1
docker logs -f veganeiro-webapp_frontend_1

# Check container stats
docker stats
```

## Backup and Restore

1. **Database Backup**:
```bash
docker exec veganeiro-webapp_db_1 pg_dump -U veganeiro_prod veganeiro_prod > backup.sql
```

2. **Database Restore**:
```bash
cat backup.sql | docker exec -i veganeiro-webapp_db_1 psql -U veganeiro_prod -d veganeiro_prod
```

## Security Considerations

1. **Environment Variables**:
   - Never commit sensitive environment variables
   - Use secrets management in production
   - Rotate database passwords regularly
   - Use strong, unique passwords

2. **Network Security**:
   - Use internal Docker network for service communication
   - Expose only necessary ports
   - Implement proper firewall rules
   - Use SSL/TLS for all external communication

3. **SSL/TLS**:
   - Configure SSL certificates for production
   - Use secure connections for all services
   - Regularly update SSL certificates
   - Implement proper certificate renewal process

## Continuous Deployment

The project uses GitHub Actions for automated deployments:

1. Push to `moon` branch for staging deployment
2. Push to `earth` branch for production deployment
3. Automated tests run before deployment
4. Automatic rollback on deployment failure

For detailed CI/CD configuration, see `.github/workflows/deploy.yml`.

## Common Issues and Solutions

1. **Backend Port Mismatch**:
   - The backend service now runs on port 5000 (changed from 4000)
   - Update any existing configurations or scripts accordingly
   - Ensure firewall rules are updated for the new port

2. **Database Migration Failures**:
   - Check database connection string format
   - Verify database user permissions
   - Review migration files for syntax errors
   - Check migration logs in container output

3. **Container Networking**:
   - All services must be on the same Docker network
   - Use service names for internal communication
   - Verify network connectivity between containers
   - Check Docker network configuration

4. **Environment Variables**:
   - All required variables must be set in .env.production
   - Variables must be properly escaped in Docker Compose
   - Verify variable interpolation in Docker Compose
   - Check for missing or incorrect variables
