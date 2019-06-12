# Debian Stretch Slim
FROM debian:stretch-slim

# Instalar Node.js 8.16.0
COPY --from=node:8.16.0 / /

# Instalar Maven 3.6.1 + Corretto 8
COPY --from=maven:3.6.1-amazoncorretto-8 / /

# Instalar Gradle 5.4.1
COPY --from=gradle:5.4.1 / /

# Dependencias
RUN dpkg --add-architecture i386
RUN apt-get -qq update
RUN apt-get -q install curl -y
RUN apt-get -q install expect -y
RUN apt-get -q install git -y
RUN apt-get -q install make -y
RUN apt-get -q install libc6:i386 -y
RUN apt-get -q install libgcc1:i386 -y
RUN apt-get -q install libncurses5:i386 -y
RUN apt-get -q install libstdc++6:i386 -y
RUN apt-get -q install zlib1g:i386 -y

# Actualizar apt-get
RUN apt-get -qq update

# Instalar sudo
RUN apt-get -q install sudo -y

# Instalar unzip
RUN sudo apt-get -q install unzip -y

# Instalar Android SDK
ENV ANDROID_HOME /usr/lib/android-sdk

RUN mkdir -p /usr/lib/android-sdk
WORKDIR /usr/lib/android-sdk
RUN curl https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip -o sdk.zip
RUN unzip -q sdk.zip
RUN rm sdk.zip

WORKDIR /
ENV PATH ${PATH}:${ANDROID_HOME}/tools
ENV PATH ${PATH}:${ANDROID_HOME}/tools/bin
ENV PATH ${PATH}:${ANDROID_HOME}/platform-tools
RUN yes | sdkmanager --licenses

# Instalar complementos de Android SDK
RUN sdkmanager "platform-tools" "platforms;android-20" "build-tools;29.0.0"

# Instalar bash
RUN sudo apt-get -q install bash -y

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