# Node 8.16.0
FROM node:8.16.0-alpine

# Instalar @angular/cli
RUN npm install -g @angular/cli@7.3.8

# Crear carpeta /usr/src/frontend
RUN mkdir -p /usr/src/frontend

# Ubicarse en carpeta /usr/src/frontend
WORKDIR /usr/src/frontend

# Copiar package.json y package-lock.json
COPY package*.json /usr/src/frontend/

# Instalar dependencias de package.json
RUN npm install