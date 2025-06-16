aaronsalmon.com
===============

aaronsalmon.com

To run locally: 
jekyll serve --baseurl='' --watch


To copy over the newly updated compiled site files to gh-pages run "build-gh" from the master branch:

build-gh

alias build-gh='cp -r _site/ ../temp; git checkout gh-pages; cp -r ../temp/* ./; rm -r ../temp; git add -A ; git status'

## Local Development

Just run:

    bundle install
    bundle exec jekyll serve

## Deploying to GitHub Pages

- If deploying as a user/organization site, leave `baseurl: ""`.
- If deploying as a project site, set `baseurl: "/your-repo-name"` in `_config.yml`.