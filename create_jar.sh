#!/bin/sh

# build frontend and copy to backend
cd frontend/passyourplant
npm run build
cp  -r ./build/* ../../backend/src/main/resources/static

# create jar file
cd  ../../backend
mvn clean package
cd target
export DATABASE_PASSWORD=vitaminC
java -jar pyp-0.0.1-SNAPSHOT.jar
