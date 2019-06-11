# Node 8.16.0
FROM node:8.16.0-slim as node

# Actualizar apt-get
RUN apt-get update

# Instalar sudo
RUN apt-get install sudo -y

# Instalar Corretto 11
RUN wget https://d3pxv6yz143wms.cloudfront.net/8.212.04.2/java-1.8.0-amazon-corretto-jdk_8.212.04-2_amd64.deb
RUN sudo apt-get update && sudo apt-get install java-common -y
RUN sudo mkdir -p /usr/share/man/man1/
RUN sudo dpkg --install java-1.8.0-amazon-corretto-jdk_8.212.04-2_amd64.deb
RUN sudo update-alternatives --config java
RUN sudo update-alternatives --config javac
ENV JAVA_HOME=/usr/lib/jvm/java-1.8.0-amazon-corretto

# Instalar Android SDK
RUN sudo apt-get install android-sdk -y

# Instalar bash
RUN sudo apt-get install bash -y

# Instalar ionic
RUN npm install -g ionic@5.0.1

# Instalar cordova
RUN npm install -g cordova

# Crear carpeta /usr/src/frontend
RUN mkdir -p /usr/src/frontend

# Ubicarse en carpeta /usr/src/frontend
WORKDIR /usr/src/frontend

# Copiar package.json y package-lock.json
COPY package*.json /usr/src/frontend/

# Instalar dependencias de package.json
RUN npm install