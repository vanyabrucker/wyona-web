#!/bin/sh

echo "Update server ..."

npm run build
scp -r out/* wyonawebsite@www.wyona.com:www/.
