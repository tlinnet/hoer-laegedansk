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
    #"FIG8-1_png",
    #"FIG8-2_png",
    #"FIG8-3_png",
    #"FIG8-4_png",
    #"FIG8-5_png",
    #"FIG9-1_png",
    #"FIG9-2_png",
    #"FIG9-3_png",
    #"FIG9-4_png",
    #"FIG9-5_png",
    #"FIG9-6_png",
    #"FIG10-1_png",
    #"FIG10-2_png",
    #"FIG10-3_png",
    #"FIG10-3A_png",
    #"FIG10-3B_png",
    #"FIG10-3C_png",
    #"FIG10-3D_png",
    #"FIG10-4_png",
    #"FIG10-4B_png",
    #"FIG10-5_png",
    #"FIG10-6A_png",
    #"FIG10-6B_png",
    #"FIG10-6C_png",
    #"FIG10-7_png",
    #"FIG10-8_png",
    #"FIG10-9_png",
    #"FIG10-10_png",
    #"FIG10-11_png",
    #"FIG10-12_png",
    #"FIG10-13_png",
    #"FIG10-14_png",
    #"FIG10-15_png",
    #"FIG10-16_png",
    #"FIG10-17_png",
    #"FIG10-18_png",
    #"FIG10-19_png",
    #"FIG10-20_png",
    #"FIG11-1_png",
    #"FIG11-2_png",
    #"FIG11-3_png",
    #"FIG11-4_png",
    #"FIG11-5_png",
    #"FIG11-6_png",
    #"FIG11-7_png",
    #"FIG11-8_png",
    #"FIG11-9_png",
    #"FIG11-10_png",
    #"FIG11-11_png",
    #"FIG11-12_png",
    #"FIG11-13_png",
    #"FIG11-15_png",
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