FROM node:18.15.0-alpine3.16

WORKDIR /app

COPY package.json .

RUN npm install

COPY . /app

RUN npm run build
