#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Example
# https://github.com/alexz-enwp/wikitools/blob/master/README.md
# https://github.com/alexz-enwp/wikitools/wiki/wiki.Wiki
# https://github.com/alexz-enwp/wikitools/wiki/page.Page

from wikitools import wiki, wikifile
import os, os.path
from time import sleep

site = wiki.Wiki("http://wiki.hoer-laegedansk.dk/api.php")
site.login("tlinnet")

wfiles_all = [
        #"HELE1",
        #"HELE2",
        "HELE3",
        #"HELE4",
        #"HELE5",
        #"HELE6",
        #"HELE7",
        #"HELE8",
        #"HELE9",
        #"HELE10",
        #"HELE11",
        #"HELE12",
        #"HELE13",
        #"HELE14",
        #"HELE15",
        ]

#wfiles = wfiles_all[:2]
wfiles = wfiles_all

for i, wfile in enumerate(wfiles):
    # Create path
    fpath = os.path.join("..", "wikitools", "mp3_per_chapter")
    fpath_mp3 = os.path.join(fpath, wfile + ".mp3")
    f_exists = os.path.exists(fpath_mp3)
    if not f_exists:
        continue

    #print(i, wfile, fpath_mp3, f_exists)

    # Get the fileobject
    F = open(fpath_mp3, "rb")

    # Get the Wiki file
    wfile_wiki = wfile + ".mp3"
    f = wikifile.File(site, wfile_wiki)
    #print(wfile_wiki, f.exists)

    # If not exists, then upload
    comment = wfile
    if not f.exists:
        print("Uploading: ", wfile_wiki, comment)

        # Upload
        res = f.upload(fileobj = F, comment=comment)
        if res['upload']['result'] == 'Warning':
            print("Oh no!")
        elif res['upload']['result'] == 'Success':
            print("File uploaded")
    else:
        print("Already exists:", wfile_wiki, comment)

    # Close
    F.close()
    sleep(1)