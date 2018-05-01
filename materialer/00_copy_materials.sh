# Copy favicon
##############

## Copy to wiki
cp favicon_files/icons/favicon.ico ../wiki/favicon.ico
## Copy to pelican
mkdir -p ../static/images
mkdir -p ../static/extra
cp favicon_files/icons/favicon.ico ../static/extra/favicon.ico