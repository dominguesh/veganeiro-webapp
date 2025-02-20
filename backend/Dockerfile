FROM node:18-alpine
RUN apk add --no-cache python3 make g++ openssl postgresql-client
WORKDIR /app
COPY package*.json tsconfig.json ./
RUN npm install
COPY prisma ./prisma/
COPY src ./src/
RUN npm run build
ENV NODE_ENV=production
ENV DATABASE_URL=postgresql://veganeiro_prod:veganeiro123@db:5432/veganeiro_prod
RUN npx prisma generate
CMD until pg_isready -h db -U veganeiro_prod -d veganeiro_prod; do sleep 1; done; \
    npx prisma migrate deploy && \
    npm start
