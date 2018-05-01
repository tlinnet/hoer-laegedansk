
# cd static && rm -f content/*.rst && cd ../pelican && source 00_cp_RST_to_static.sh && cd ..

# Remove old files
cd static
rm -f content/*.rst

# Copy files
cd ../pelican
source 00_cp_RST_to_static.sh

# Build
cd ../static
source activate pelican
make devserver && open http://localhost:8000
source deactivate pelican
cd ..