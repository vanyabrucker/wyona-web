#!/bin/sh

echo "Update server ..."

npm run export
find out -name "*.html" -print
scp -r out/* wyonawebsite@www.wyona.com:www/.
