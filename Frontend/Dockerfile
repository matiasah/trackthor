# Node 8.15.1
FROM node:8.15.1-alpine

# Instalamos angular cli en nuestra imágen
RUN npm install -g @angular/cli@7.3.8

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app

RUN npm install