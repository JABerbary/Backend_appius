
#!/bin/bash
export ENV_PATH="./.env"

CONTAINER_NAME=appiusdb-2024
IMAGE_NAME=$CONTAINER_NAME-image:1.0.0
PORT=3000


docker rm -f $CONTAINER_NAME
docker image rm $IMAGE_NAME

docker build \
    --tag $IMAGE_NAME \
    --compress \
    --force-rm \
    --no-cache \
    .

docker run \
    --detach \
    --restart always \
    --name $CONTAINER_NAME \
    --publish $PORT:$PORT \
    --env-file $ENV_PATH \
    $IMAGE_NAME
