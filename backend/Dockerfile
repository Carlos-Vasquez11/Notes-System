# Usa una imagen base con Maven y Java 17
FROM maven:3.8-openjdk-17 AS build

# Copia el código fuente al directorio de trabajo
COPY . /app

# Establece el directorio de trabajo
WORKDIR /app

# Compila el proyecto
RUN mvn clean install -DskipTests

# Usa una imagen base con Java 17
FROM openjdk:17-jdk-alpine

# Copia el archivo JAR al directorio /app
COPY --from=build /app/target/backend-1.1.0.RELEASE.jar /app/app.jar

# Establece el directorio de trabajo en /app
WORKDIR /app

# Variables de entorno
ENV SERVER_PORT=8080
ENV SERVER_SERVLET_CONTEXT_PATH=/notes/api
ENV SPRING_DATASOURCE_URL=jdbc:mysql://mySQLDB/notes_db
ENV SPRING_DATASOURCE_USERNAME=root
ENV SPRING_DATASOURCE_PASSWORD=1234
ENV SPRING_DATASOURCE_DRIVER-CLASS-NAME=com.mysql.cj.jdbc.Driver
ENV SPRING_JPA_SHOW-SQL=true
ENV SPRING_JPA_HIBERNATE_DDL-AUTO=update
ENV SPRING_JPA_PROPERTIES_HIBERNATE_DIALECT=org.hibernate.dialect.MySQLDialect

# Comando para ejecutar la aplicación al iniciar el contenedor
CMD ["java", "-jar", "app.jar"]
