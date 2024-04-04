FROM node:14-alpine AS builder
WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . ./

FROM gcr.io/distroless/nodejs:14
WORKDIR /app
COPY --from=builder /app .
CMD ["index.js"]