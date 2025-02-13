# Use Node.js LTS
FROM node:18-alpine

# Install necessary build tools for Prisma
RUN apk add --no-cache python3 make g++

# Set working directory
WORKDIR /app

# Install dependencies first (caching)
COPY package*.json ./
RUN npm install

# Copy Prisma schema
COPY prisma ./prisma/

# Generate Prisma client
RUN npx prisma generate

# Copy source code
COPY . .

# Build TypeScript
RUN npm run build || true

# Expose port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
