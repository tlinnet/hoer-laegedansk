# Example
# https://github.com/alexz-enwp/wikitools/blob/master/README.md
# https://github.com/alexz-enwp/wikitools/wiki/wiki.Wiki
# https://github.com/alexz-enwp/wikitools/wiki/page.Page

from wikitools import wiki, page

site = wiki.Wiki("http://wiki.hoer-laegedansk.dk/api.php")
#site.login("tlinnet", password="xhwo1453Xl")
p = page.Page(site, "Forside2")
#if p.exists:
# pagetext = p.getWikiText()

# Edit the text
#p.edit(text=pagetext, summary='Test', minor=True)
#pagetext = p.getWikiText()
#print(pagetext)    