# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

- Mint System GmbH button in the navigation, styled with `docs/stylesheets/style.css`.
- Plausible analytics for `wiki.mint-system.ch` in `docs/javascripts/extra.js`.

### Changed

- Site logo and favicon now use the Mint System logo `docs/assets/logo.svg`.
- `.gitignore` keeps the Zensical static assets (`docs/assets/`, `docs/javascripts/`, `docs/stylesheets/`) tracked, since the deploy pod skips the scaffold.