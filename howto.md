

# info
```bash
conda info --envs
source activate pelican
source activate wikitools
```

See log
```bash
git log -p -1
git log -p -1 --stat
```

Change chapter
```
open materialer/Subjektivt_og_Objektivt_1udg_tekst_frigivet_til_undervisningsbrug.pdf
atom reStructuredText/7_Mave-tarm-systemet.rst
```

Make changes
```bash
atom 01_update_wiki.sh 
atom wikitools/wiki_upload_pages.py
```

Test reStructuredText
```bash
restview reStructuredText/Forside.rst
```

Upload
```bash
bash source 01_update_wiki.sh
```