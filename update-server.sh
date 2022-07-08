#!/bin/sh

echo "INFO: Generate static export ..."
echo ""
npm run export

echo ""
echo "INFO: Rename HTML files ..."
echo ""
#find out -name "*.html" -print
array=(`find out -name '*.html'`)
for file in "${array[@]}"
do :
    echo "Remove html suffix from $file"
    mv $file `echo $file | sed 's/.html$//'`
done

mv out/index out/index.html
mv out/404 out/404.html

echo ""
echo "INFO: Upload export to server ..."
echo ""
scp -r out/* wyonawebsite@www.wyona.com:www/.