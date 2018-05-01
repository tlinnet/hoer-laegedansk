# Manual example
#pandoc --from=rst --to=mediawiki --table-of-content --standalone 1_Moedet_mellem_laege_og_patient.rst --output=1_Moedet_mellem_laege_og_patient.Wiki

get_abs_filename() {
  # $1 : relative filename
  echo "$(cd "$(dirname "$1")" && pwd)/$(basename "$1")"
}

shopt -s nullglob
#for fullfile in *.rst; do
RSTFILES=`find "../reStructuredText/" -name "*.rst" -type f | sort -n`
for fullfile in $RSTFILES; do
    filename="$(basename -- "$fullfile")"
    extension="${filename##*.}"
    filename="${filename%.*}"
    #fullpath=$(get_abs_filename "../static/content/${filename}.rst")
    #if [ ! -f fullpath ]; then
    if [ ! -f "../static/content/${filename}.rst" ]; then
        echo "File not found!" "Copy Wiki file: " ${fullfile}
        cp ${fullfile} ../static/content/
        # brew install gnu-sed
        # First make big
        gsed -i 's/<[1-9]*_/{filename}&/g' ../static/content/${filename}.rst
        gsed -i 's/{filename}</<{filename}/g' ../static/content/${filename}.rst
    fi
done