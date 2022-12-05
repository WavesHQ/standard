# Standard

Inspired by [Birthday Research's Sticky](https://github.com/BirthdayResearch/sticky), Standard is a collection of tools and services for building scalable JS/TS apps on different platforms.

`@waveshq/standard-*` aims to provide standard tooling and configurations for different platforms. Most platform specific library (e.g, Next.js, Electron, Tauri etc.) has its own set of rules to follow. `@waveshq/standard` aims to solve this problem so that contributors can just focus on development.

## Packages

All packages follow the same format `@waveshq/standard-(platform)-*`. All dependencies are published
with the same version tag.

| Package                      | Type        | Description                                                                        |
| ---------------------------- | ----------- | ---------------------------------------------------------------------------------- |
| @waveshq/standard-web        | Boilerplate | Boilerplate for easier scaffolding of web projects. (Next.js + React + TypeScript) |
| @waveshq/standard-web-linter | Linting     | Standardized eslint and prettier config for Web based on Next.js rules.            |

## Renovate

A default renovate configuration file is provided on this package.

```json
{
  "extends": ["github:waveshq/renovate-config"]
}
```
