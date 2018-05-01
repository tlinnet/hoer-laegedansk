# Manual example
pandoc --from=rst --to=markdown --table-of-content --standalone Forside.rst --output=../README.md
gsed -i -n '7,$p' ../README.md
