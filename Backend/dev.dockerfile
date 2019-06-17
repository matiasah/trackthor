FROM maven:3.6.1-amazoncorretto-11

# Ubicarse en la carpeta del backend
WORKDIR /usr/src/backend

# Copiar todos los archivos del backend al contenedor
COPY pom.xml /usr/src/backend/pom.xml

# Cargar las dependencias del backend
RUN mvn dependency:resolve