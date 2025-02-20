FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "dev"]
