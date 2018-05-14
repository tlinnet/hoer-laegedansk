
# cd reStructuredText && source 00_convert_rst_to_Wiki.sh && cd ../wikitools && rm -f *_*.Wiki && rm Forside.Wiki && source 00_cp_Wiki_here.sh && cd ..

# Convert .rst files to .Wiki
cd reStructuredText
source 00_convert_rst_to_Wiki.sh

# Change dir
cd ../wikitools
# Delete .Wiki old files
#rm -f *_*.Wiki
#rm Forside.Wiki

# Delete single
#rm 10_Bevægeapparatet.Wiki
#rm 11_Centralnervesystemet.Wiki
rm 12_Det_perifere_karsystem.Wiki

# Copy over .Wiki files
source 00_cp_Wiki_here.sh

# Aktivate python
source activate wikitools
# Run script for upload
python wiki_upload_pages.py

# Deactivate
source deactivate wikitools

# Go back
cd ..