
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
#rm 0_Forord.Wiki
#rm 1_Mødet_mellem_læge_og_patient.Wiki
#rm 2_Sygehusjournalen.Wiki
#rm 3_Indlæggelsesnotatet.Wiki
#rm 4_Almene_symptomer_og_fund.Wiki
#rm 5_Hjertet.Wiki
#rm 6_Lunger_og_luftveje.Wiki
#rm 7_Mave-tarm-systemet.Wiki
#rm 8_Nyrer,_urinveje_og_mandlige_kønsorganer.Wiki
#rm 9_Kvindelige_kønsorganer.Wiki
rm 10_Bevægeapparatet.Wiki
#rm 11_Centralnervesystemet.Wiki
#rm 12_Det_perifere_karsystem.Wiki
#rm 13_Kirtler.Wiki
#rm 14_Hud.Wiki
#rm 15_Sanseorganer.Wiki

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