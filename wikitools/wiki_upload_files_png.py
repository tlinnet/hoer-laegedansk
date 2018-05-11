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
    #"FIG4-1_png",
    #"FIG4-2_png",
    #"FIG5-1_png",
    #"FIG5-2_png",
    #"FIG5-3_png",
    #"FIG5-4_png",
    #"FIG5-5_png",
    #"FIG5-6_png",
    #"FIG5-7_png",
    #"FIG6-1_png",
    #"FIG6-2_png",
    #"FIG6-3_png",
    #"FIG6-4_png",
    #"FIG7-1_png",
    #"FIG7-2_png",
    #"FIG7-3_png",
    #"FIG7-4_png",
    #"FIG7-5_png",
    #"FIG7-6_png",
    #"FIG7-7_png",
    #"FIG7-8_png",
    ]

#wfiles = wfiles_all[:2]
wfiles = wfiles_all

for i, wfile in enumerate(wfiles):
    # Create path
    fpath = os.path.join("..", "reStructuredText", "Figurer")
    fpath_png = os.path.join(fpath, wfile + ".png")
    f_exists = os.path.exists(fpath_png)
    if not f_exists:
        continue

    #print(i, wfile, fpath_png, f_exists)

    # Get the fileobject
    F = open(fpath_png, "rb")

    # Get the Wiki file
    wfile_wiki = wfile + ".png"
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