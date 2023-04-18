FROM node:18.15.0-alpine3.16

COPY . .

RUN npm ci

EXPOSE 4552

CMD ["npm build"]
