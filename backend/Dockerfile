FROM node:18-alpine
RUN apk add --no-cache python3 make g++ openssl postgresql-client
WORKDIR /app
COPY package*.json tsconfig.json ./
COPY prisma ./prisma/
COPY src ./src/
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
ENV DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@db:5432/${POSTGRES_DB}

RUN npm install

CMD until pg_isready -h db -U ${POSTGRES_USER} -d ${POSTGRES_DB}; do sleep 1; done; \
    npx prisma migrate deploy && \
    npm run dev
