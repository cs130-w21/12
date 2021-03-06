FROM node:10-alpine AS base

RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN yarn install
COPY . /app

FROM base AS test
RUN yarn test

FROM base AS build
RUN yarn run build

FROM nginx:alpine AS deploy

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'