
# Convert .rst files to .Wiki
cd reStructuredText
source 00_convert_rst_to_Wiki.sh

# Change dir
cd ../wikitools
# Delete .Wiki old files
rm -f *_*.Wiki
rm Forside.Wiki
# Copy over .Wiki files
source 00_cp_Wiki_here.sh

# Aktivate python
source activate wikitools
# Run script for upload
python test_page.py

# Deactivate
source deactivate wikitools

# Go back
cd ..