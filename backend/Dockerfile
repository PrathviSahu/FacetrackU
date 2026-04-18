FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

# Install curl for health check
RUN apk add --no-cache curl

COPY backend/target/major-project-1.0.0.jar app.jar

EXPOSE 8080

# Health check for Render
HEALTHCHECK --interval=30s --timeout=3s --start-period=60s --retries=3 \
  CMD curl -f http://localhost:${PORT:-8080}/api/actuator/health || exit 1

# Use Render's PORT or default to 8080
ENTRYPOINT ["sh", "-c", "java -jar app.jar --server.port=${PORT:-8080}"]
