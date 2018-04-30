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
    # Replace
    # brew install gnu-sed
    # First make big
    gsed -i 's/.rst#[a-z]/\U&/g' ${filename}.Wiki
    # Then remove 
    gsed -i 's/.RST#/#/g' ${filename}.Wiki
    # # Then replace "-" with "_" between "[" and "|"
    gsed -i -e :1 -e 's@\(\[.*\)-\(.*\|\)@\1_\2@;t1' ${filename}.Wiki
    # If no section is added, then just replace
    gsed -i 's/.rst#//g' ${filename}.Wiki
done