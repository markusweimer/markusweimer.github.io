# My website

This site is built with Jekyll and published to GitHub Pages.

## Local development

Install the Ruby version in `.ruby-version`, then install the locked dependencies:

```shell
gem install bundler
bundle install
bundle exec jekyll serve --livereload
```

Open <http://127.0.0.1:4000/>.

## Deployment

Pushes to `master` build and deploy through `.github/workflows/pages.yml`. The
workflow uses the same Ruby version and `Gemfile.lock` as local development.
