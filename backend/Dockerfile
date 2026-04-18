FROM openjdk:17-jdk-slim

WORKDIR /app

COPY target/major-project-1.0.0.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar", "--server.port=${PORT:-8080}"]
