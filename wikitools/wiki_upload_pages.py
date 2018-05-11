#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Example
# https://github.com/alexz-enwp/wikitools/blob/master/README.md
# https://github.com/alexz-enwp/wikitools/wiki/wiki.Wiki
# https://github.com/alexz-enwp/wikitools/wiki/page.Page

from wikitools import wiki, page
import os.path
from time import sleep

site = wiki.Wiki("http://wiki.hoer-laegedansk.dk/api.php")
site.login("tlinnet")

wpages = [
    #"Forside",
    #"0_Forord",
    #"1_Mødet_mellem_læge_og_patient",
    #"2_Sygehusjournalen",
    #"3_Indlæggelsesnotatet",
    #"4_Almene_symptomer_og_fund",
    #"5_Hjertet",
    #"6_Lunger_og_luftveje",
    #"7_Mave-tarm-systemet",
    #"8_Nyrer,_urinveje_og_mandlige_kønsorganer",
    #"9_Kvindelige_kønsorganer",
    "10_Bevægeapparatet",
]

# loop over pages
for wpage in wpages:
    # Check if exists
    wpage_file = wpage + ".Wiki"
    if not os.path.exists(wpage_file):
        continue

    # Get the text of the page
    F = open(wpage_file, "r") 
    wpage_text = F.read()
    F.close()
    #print(wpage_text)

    # Get the page
    p = page.Page(site, wpage)

    #if p.exists:
    # pagetext = p.getWikiText()

    # Edit the text
    #wpage_text = "Testing"
    p.edit(text=wpage_text, summary='Updating with script', minor=True, skipmd5=True)
    pagetext = p.getWikiText()
    print(pagetext)
    sleep(1)