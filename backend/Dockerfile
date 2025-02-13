# Use Node.js LTS
FROM node:18-alpine

# Install necessary build tools for Prisma and OpenSSL
RUN apk add --no-cache python3 make g++ openssl

# Set working directory
WORKDIR /app

# Install dependencies first (caching)
COPY package*.json tsconfig.json ./
RUN npm install

# Copy Prisma schema
COPY prisma ./prisma/

# Generate Prisma client
RUN npx prisma generate

# Copy source code
COPY src ./src/

# Build TypeScript
RUN npm run build

# Expose port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
