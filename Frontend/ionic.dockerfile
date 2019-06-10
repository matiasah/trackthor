# Node 8.15.1
FROM node:8.15.1-slim as node

# Actualizar apt-get
RUN apt-get update

# Instalar sudo
RUN apt-get install sudo -y

# Instalar bash
RUN sudo apt-get install bash -y

# Instalar Android SDK
RUN sudo apt install android-sdk -y

# Instalar ionic
RUN npm install -g ionic@5.0.1

# Crear carpeta /usr/src/frontend
RUN mkdir -p /usr/src/frontend

# Ubicarse en carpeta /usr/src/frontend
WORKDIR /usr/src/frontend

# Copiar package.json y package-lock.json
COPY package*.json /usr/src/frontend/

# Instalar dependencias de package.json
RUN npm install