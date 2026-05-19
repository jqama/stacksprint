# Stage 1: Build the application using Maven
FROM eclipse-temurin:17-jdk-alpine AS builder
WORKDIR /app
COPY . .
RUN ./mvnw clean package -DskipTests

# Stage 2: Run the compiled application
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
# Copy the compiled .jar file from the builder stage
COPY --from=builder /app/target/*.jar app.jar

EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
