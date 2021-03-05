FROM node:12-buster AS base

RUN apt-get update && \
    rm -rf /var/lib/apt/lists/*
COPY . /opt/app/
RUN cd /opt/app && yarn
WORKDIR /opt/app

FROM base AS test
RUN yarn run test

FROM base AS dev
USER node
EXPOSE 8080
CMD ["node", "index.js"]
