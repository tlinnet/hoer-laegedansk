# Copy favicon
##############

## Copy to wiki
cp favicon_files/icons/favicon.ico ../wiki/favicon.ico
## Copy to pelican
mkdir -p ../static/content/images
mkdir -p ../static/content/extra
cp favicon_files/icons/favicon.ico ../static/content/extra/favicon.ico