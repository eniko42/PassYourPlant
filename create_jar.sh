#!/bin/sh

cd frontend/passyourplant
npm run build
cp  -r ./build/* ../../backend/src/main/resources/static