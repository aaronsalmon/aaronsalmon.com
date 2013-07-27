aaronsalmon.com
===============

aaronsalmon.com


To copy over the newly updated compiled site files to gh-pages run "build-gh" from the master branch:

alias build-gh='cp -r _site/ ../temp; git checkout gh-pages; cp -r ../temp/* ./; rm -r ../temp; git add -A ; git status'