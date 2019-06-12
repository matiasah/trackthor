# Node 8.16.0
FROM node:8.16.0-slim as node

# Actualizar apt-get
RUN apt-get update

# Instalar sudo
RUN apt-get install sudo -y

# Instalar Corretto 8
RUN wget https://d3pxv6yz143wms.cloudfront.net/8.212.04.2/java-1.8.0-amazon-corretto-jdk_8.212.04-2_amd64.deb
RUN sudo apt-get update && sudo apt-get install java-common -y
RUN sudo mkdir -p /usr/share/man/man1/
RUN sudo dpkg --install java-1.8.0-amazon-corretto-jdk_8.212.04-2_amd64.deb
RUN sudo update-alternatives --config java
RUN sudo update-alternatives --config javac
ENV JAVA_HOME=/usr/lib/jvm/java-1.8.0-amazon-corretto

# Instalar unzip
RUN sudo apt-get install unzip

# Instalar Android SDK
ENV ANDROID_HOME /usr/lib/android-sdk

RUN mkdir -p /usr/lib/android-sdk
WORKDIR /usr/lib/android-sdk
RUN curl https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip -o sdk.zip
RUN unzip sdk.zip
RUN rm sdk.zip

WORKDIR /
ENV PATH ${PATH}:${ANDROID_HOME}/tools
ENV PATH ${PATH}:${ANDROID_HOME}/tools/bin
ENV PATH ${PATH}:${ANDROID_HOME}/platform-tools
RUN yes | sdkmanager --licenses

# Instalar add-apt-repository
RUN sudo apt-get install software-properties-common -y

# Instalar Gradle
RUN sudo add-apt-repository ppa:cwchien/gradle
RUN sudo apt-get update
RUN sudo apt-get install gradle-ppa -y --allow-unauthenticated

# Instalar complementos de Android SDK
RUN sdkmanager "platform-tools" "platforms;android-20" "build-tools;29.0.0"

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