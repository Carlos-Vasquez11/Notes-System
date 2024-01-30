#!/bin/bash
#Network
docker network create --driver bridge my-net

#MySQL
echo "Deploying MySQL"

echo "MySQL Image"
docker pull mysql #MySQL Image

echo "Running DDBB container"
docker run -d -p 13306:3306 --name mySQLDB --network my-net -e MYSQL_ROOT_PASSWORD=1234 mysql

sleep 20

echo "Creating DDBB (notes_db)"
docker exec -it mySQLDB mysql -uroot -p1234 -e "CREATE DATABASE notes_db;"
sleep 5
docker exec -it mySQLDB mysql -uroot -p1234 -e "CREATE DATABASE notes_db;"
docker exec -it mySQLDB mysql -uroot -p1234 -e "CREATE DATABASE notes_db;"

docker exec -it mySQLDB mysql -uroot -p1234 -e "SHOW DATABASES;"

#Backend
echo "Deploying Backend"
cd ./backend

#echo "Compiling"
#RUN ./mvnw clean install

echo "Build Image"
docker build -t backendimg .

echo "Running back container"
docker run --network my-net --name springboot-container -p 8080:8080 -d backendimg

cd ..

#Frontend
cd ./frontend
echo "Deploying Frontend"

#echo "Compiling Project"
#npm run build

echo "Build Image"
docker build -t frontendimg .

sleep 5

echo "Running front container"
docker run --network my-net -p 8081:80 frontendimg
