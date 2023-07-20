## This is a Single Web application in React based on the [Figma design](https://www.figma.com/file/lz9lLpFHMxHm2odnwM3R0z/gpt3)

## The following are some Docker notes

Building docker image :
### `docker build -t gpt3-project:0.0.1-SNAPSHOT .`

Run container, -p 3001:3000 exposes port 3000 to other Docker containers on the same network (for inter-container communication) and port 3001 to the host. :
### `docker run -d -p 3001:3000 --name gpt3-project-container gpt3-project:0.0.1-SNAPSHOT`

List containers :
### `docker ps -a`

Stop container :
### `docker stop CONTAINER_ID`

Remove container :
### `docker rm CONTAINER_ID`

List images :
### `docker images`

Remove image :
### `docker image rm IMAGE_ID`

Link to project on localhost :
http://host.docker.internal:3001/

