FROM openjdk:17-alpine@sha256:a996cdcc040704ec6badaf5fecf1e144c096e00231a29188596c784bcf858d05

ARG JAR_FILE=backend/target/pyp-0.0.1-SNAPSHOT.jar

COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java","-jar","/app.jar"]

# docker build -t robodog -f Dockerfile2.dockerfile .
# docker run --name robodog-container --rm -dp 8081:8080 robodog