FROM node:12-buster

RUN apt-get update && \
    rm -rf /var/lib/apt/lists/*
COPY . /opt/app/
RUN cd /opt/app && yarn
WORKDIR /opt/app
USER node
EXPOSE 8080
CMD ["node", "index.js"]
