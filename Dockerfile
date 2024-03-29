FROM node:18.15.0-alpine3.17 as build

WORKDIR /usr/src/app

COPY package*.json ./

ARG API_URL

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:1.25.2-alpine

RUN rm /etc/nginx/conf.d/default.conf

COPY /nginx/nginx.conf /etc/nginx/conf.d

COPY --from=build /usr/src/app/dist /usr/share/nginx/html
