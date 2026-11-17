# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

- Mint System GmbH button in the navigation, styled with `docs/stylesheets/style.css`.
- Plausible analytics for `wiki.mint-system.ch` in `docs/javascripts/extra.js`.

### Fixed

- Obsidian canvas embeds render again: canvas files in `attachments/` are converted to SVG, embeds without an alias (`![[Name.canvas]]`) are converted to image links, and canvas text is XML-escaped so the generated SVG stays well-formed.
- Canvas SVGs support dark mode via `prefers-color-scheme`, so text and group fills stay readable on the slate theme.

### Changed

- Site logo and favicon now use the Mint System logo `docs/assets/logo.svg`.
- `.gitignore` keeps the Zensical static assets (`docs/assets/`, `docs/javascripts/`, `docs/stylesheets/`) tracked, since the deploy pod skips the scaffold.