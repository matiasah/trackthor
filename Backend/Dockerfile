# # Maven + Corretto 11
# #FROM maven:3.6.1-amazoncorretto-11
# FROM amazoncorretto:8

# #Start with a base image containing Java runtime
# #FROM openjdk:8-jdk-alpine

# # Add a volume pointing to /tmp
# VOLUME /tmp

# # Make port 8080 available to the world outside this container
# EXPOSE 8080

# # The application's jar file
# ARG JAR_FILE=target/Backend-0.0.1.jar

# # Add the application's jar to the container
# ADD ${JAR_FILE} Backend-demo.jar

# # Run the jar file 
# ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/Backend-demo.jar"]

## 
#FROM maven:3.5.4-jdk-10-slim
FROM maven:3.6.1-amazoncorretto-11
WORKDIR /usr/src/java-code
COPY . /usr/src/java-code/
RUN mvn package
 
WORKDIR /usr/src/java-app
RUN cp /usr/src/java-code/target/*.jar ./app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]