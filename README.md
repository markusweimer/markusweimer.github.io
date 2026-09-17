# Markus Weimer's website

The source for [www.weimo.de](https://www.weimo.de/), built with Jekyll and
hosted by GitHub Pages.

## Local development

### Prerequisites

- Ruby matching [`.ruby-version`](.ruby-version)
- Bundler

On Apple silicon macOS, install the versioned Homebrew formula and put it before
the system Ruby:

```shell
brew install ruby@3.3
export PATH="/opt/homebrew/opt/ruby@3.3/bin:/opt/homebrew/lib/ruby/gems/3.3.0/bin:$PATH"
gem install bundler
```

Add the `PATH` export to `~/.zshrc` to make it persistent. Confirm the active
runtime with `ruby --version` before installing dependencies.

### Preview the site

```shell
bundle install
bundle exec jekyll serve --livereload
```

Open <http://127.0.0.1:4000/>. Stop the server with <kbd>Ctrl</kbd>+<kbd>C</kbd>.

Run a clean production build before opening a pull request:

```shell
rm -rf _site
JEKYLL_ENV=production bundle exec jekyll build --trace
```

Generated output belongs in `_site/` and must not be committed.

## Content and layout

- Posts are Markdown files in `_posts/`; keep the existing permalink structure
  to preserve inbound links.
- Shared page structure is in `_layouts/` and `_includes/`.
- Site-wide metadata and enabled plugins are in `_config.yml`.
- The homepage lists the 15 newest posts; `/archive/` contains the complete
  year-grouped archive.
- CSS and JavaScript are served from `css/` and `js/`.
- `robots.txt`, `sitemap.xml`, and `feed.xml` provide site discovery and
  syndication.

## Deployment

[`.github/workflows/pages.yml`](.github/workflows/pages.yml) builds and deploys
the site on every push to `master`. Pull-request branches do not deploy.

The workflow:

1. Checks out the exact commit.
2. Installs the Ruby version from `.ruby-version` and dependencies from
   `Gemfile.lock`.
3. Builds Jekyll with `JEKYLL_ENV=production`.
4. Uploads only the generated `_site/` artifact.
5. Deploys through the protected `github-pages` environment.

GitHub Actions are pinned to immutable commit SHAs. The trailing version
comments are informational; Dependabot updates both the SHA and comment.

### Monitor or rerun a deployment

Open **Actions → Deploy Jekyll site to Pages**. A successful run contains both a
green `build` job and a green `deploy` job. The deployment URL also appears in
**Settings → Environments → github-pages**.

To redeploy the current `master` commit without changing content, select **Run
workflow** on the workflow page. A manual run is not normally required after a
merge because the push to `master` starts the workflow automatically.

### Troubleshooting

- **Build failed:** inspect the `Build site` log, reproduce it with the clean
  production-build command above, and commit the correction.
- **Dependency install failed:** verify the Ruby version, run `bundle install`,
  and commit any intentional `Gemfile.lock` update.
- **Deploy failed after a successful build:** confirm **Settings → Pages →
  Build and deployment → Source** is set to **GitHub Actions**, then rerun the
  workflow.
- **Old CSS or JavaScript appears:** hard-refresh once. Asset URLs include the
  build revision, so new deployments should not mix old assets with new HTML.
- **The live site is unavailable but the workflow succeeded:** check
  **Settings → Pages**, the custom-domain DNS records, and GitHub's service
  status.

## Custom domain and HTTPS

GitHub Pages is configured with:

- Custom domain: `www.weimo.de`
- HTTPS enforcement: enabled
- Canonical site URL: `https://www.weimo.de`

Domain ownership should be verified in the GitHub account's Pages settings.
Keep the domain registration current and avoid wildcard DNS records. The apex
domain should use GitHub Pages' current documented `A`/`AAAA` records and
`www` should resolve to the Pages site.

Useful checks:

```shell
dig +short weimo.de A
dig +short www.weimo.de
curl -I http://weimo.de/
curl -I https://www.weimo.de/
```

HTTP and the apex domain should redirect to `https://www.weimo.de/`. After DNS
changes, allow up to 24 hours for propagation and certificate provisioning.

## Dependency maintenance

[Dependabot](.github/dependabot.yml) checks Bundler and GitHub Actions weekly.
Review its grouped pull requests, confirm the production build succeeds, and
merge normally.

For a manual GitHub Pages dependency refresh:

```shell
bundle update github-pages
JEKYLL_ENV=production bundle exec jekyll build --trace
```

Commit `Gemfile.lock` whenever dependencies change. When updating Ruby, change
`.ruby-version`, run `bundle install`, rebuild locally, and verify that
`ruby/setup-ruby` supports the selected version.

## Rollback

Do not force-push `master`. Revert the problematic merge commit in a new branch,
open a pull request, and merge the revert. The resulting push to `master`
automatically deploys the restored site:

```shell
git switch -c revert-site-change origin/master
git revert <merge-commit>
git push -u origin revert-site-change
```

If the content is correct and only the deployment failed, rerun the existing
workflow instead of creating a revert.
