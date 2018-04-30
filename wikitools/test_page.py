# Example
# https://github.com/alexz-enwp/wikitools/blob/master/README.md
# https://github.com/alexz-enwp/wikitools/wiki/wiki.Wiki
# https://github.com/alexz-enwp/wikitools/wiki/page.Page

from wikitools import wiki, page
import os.path

site = wiki.Wiki("http://wiki.hoer-laegedansk.dk/api.php")
site.login("tlinnet", password="xhwo1453Xl")

wpages = [
    "1_Moedet_mellem_laege_og_patient",
    #"2_Sygehusjournalen",
    #"3_Indlaeggelsesnotatet"
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
    wpage_text = "Testing"
    p.edit(text=wpage_text, summary='Updating with script', minor=True)
    pagetext = p.getWikiText()
    print(pagetext)    