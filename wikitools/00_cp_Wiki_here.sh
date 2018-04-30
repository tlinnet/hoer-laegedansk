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
    fi
    cp ${fullfile} .
done