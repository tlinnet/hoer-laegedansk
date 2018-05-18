# Manual example
#pandoc --from=rst --to=mediawiki --table-of-content --standalone 1_Moedet_mellem_laege_og_patient.rst --output=1_Moedet_mellem_laege_og_patient.Wiki

shopt -s nullglob
#for fullfile in *.rst; do
RSTFILES=`find "../reStructuredText/" -name "*.Wiki" -type f | sort -n`
for fullfile in $RSTFILES; do
    filename="$(basename -- "$fullfile")"
    extension="${filename##*.}"
    filename="${filename%.*}"
    if [ ! -f ${filename}.Wiki ]; then
        echo "File not found!" "Copy Wiki file: " ${fullfile}
        cp ${fullfile} .
        # Replace
        # brew install gnu-sed
        # First make big
        gsed -i 's/.rst#./\U&/g' ${filename}.Wiki
        # Then remove 
        gsed -i 's/.RST#/#/g' ${filename}.Wiki
        # Then replace "-" with "_" between "[" and "|"
        gsed -i -e :1 -e 's@\(\[.*\)-\(.*\|\)@\1_\2@;t1' ${filename}.Wiki
        # Fix for 7_Mave_tarm_systemet
        gsed -i 's/Mave_tarm_systemet/Mave-tarm-systemet/g' ${filename}.Wiki
        # If no section is added, then just replace
        gsed -i 's/.rst#//g' ${filename}.Wiki
        # Fix < and >
        gsed -i 's/&lt;html5media&gt;/<html5media>/g' ${filename}.Wiki
        gsed -i 's/&lt;\/html5media&gt;/<\/html5media>/g' ${filename}.Wiki

        # Fix Image
        gsed -i 's/\[\[File:Figurer\//[[File:/g' ${filename}.Wiki
        gsed -i '/FIG[0-9]*_[0-9]/s/_/-/g' ${filename}.Wiki
        gsed -i 's/-png.png/_png.png/g' ${filename}.Wiki
        gsed -i 's/|frame|/|thumb|/g' ${filename}.Wiki
        gsed -i 's/|caption/|/g' ${filename}.Wiki
        
        # Fix Link
        gsed -i 's/hoer_laegedansk/hoer-laegedansk/g' ${filename}.Wiki
        gsed -i 's/\[\[https:\/\/translate\.google\.com/\[https:\/\/translate\.google\.com/g' ${filename}.Wiki
        gsed -i 's/|Google Translate\]\]/ Google Translate\]/g' ${filename}.Wiki
    fi
done