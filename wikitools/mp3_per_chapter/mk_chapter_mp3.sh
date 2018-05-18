#!/bin/bash

# Check if filename is supplied
if [ -z "$1" ]
then
    echo "Filename not supplied. Exit"
    exit 1
fi

FNAME=`basename $1`
FBNAME=`echo $FNAME | cut -d. -f1`
FNAMEO=${FBNAME}.sh

IFS='_' read -ra KSPLIT <<< "$FBNAME"
KAPITEL=${KSPLIT[0]}
MP3FNAMEO="HELE${KAPITEL}.mp3"

echo "cat \\" > $FNAMEO

grep ".mp3" $1 \
| grep -v "BOKS" \
| grep -v "FIG" \
| grep -v "OP-JOUR" \
| sed 's/<html5media>File:/..\/..\/materialer\/CKU\/MP3\//g' \
| sed 's/<\/html5media>/ \\/g' >> $FNAMEO

echo "> $MP3FNAMEO"  >> $FNAMEO

cat $FNAMEO