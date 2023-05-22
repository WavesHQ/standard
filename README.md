# Standard

Inspired by [Birthday Research's Sticky](https://github.com/BirthdayResearch/sticky), Standard is a collection of tools
and services for building scalable JS/TS apps on different platforms.

`@waveshq/standard-*` aims to provide standard tooling and configurations for different platforms. Most platform
specific library (e.g, Next.js, Electron, Tauri etc.) has its own set of rules to follow. `@waveshq/standard` aims to
solve this problem so that contributors can just focus on development.

## Packages

All packages follow the same format `@waveshq/standard-(platform)-*`. All dependencies are published
with the same version tag.

### Web

| Package                      | Type        | Description                                                                        |
| ---------------------------- | ----------- | ---------------------------------------------------------------------------------- |
| @waveshq/standard-web        | Boilerplate | Boilerplate for easier scaffolding of web projects. (Next.js + React + TypeScript) |
| @waveshq/standard-web-linter | Linting     | Standardized eslint and prettier config for Web based on Next.js rules.            |

### Desktop

| Package                          | Type        | Description                                                                                 |
| -------------------------------- | ----------- | ------------------------------------------------------------------------------------------- |
| @waveshq/standard-desktop        | Boilerplate | Boilerplate for easier scaffolding of desktop projects. (Tauri + Vite + React + TypeScript) |
| @waveshq/standard-desktop-linter | Linting     | Standardized eslint and prettier config for Desktop.                                        |

### JellyfishSDK

| Package                                  | Type    | Description                                                                      |
| ---------------------------------------- | ------- | -------------------------------------------------------------------------------- |
| @waveshq/standard-defichain-jellyfishsdk | Library | Collection of JellyfishSDK libraries that can be used to develop DeFiChain apps. |

### Prettier

| Package                    | Type   | Description                                              |
| -------------------------- | ------ | -------------------------------------------------------- |
| @waveshq/standard-prettier | Linter | Standardized eslint and prettier config for TS projects. |

### API

| Package                       | Type        | Description                                                                          |
|-------------------------------|-------------|--------------------------------------------------------------------------------------|
| @waveshq/standard-api-fastify | Boilerplate | Boilerplate for easier scaffolding of API projects. (Nest.js + Fastify + TypeScript) |
| @waveshq/standard-api-express | Boilerplate | Boilerplate for easier scaffolding of API projects. (Nest.js + Express + TypeScript) |


### Renovate

Renovate configuration files are provided on this package. Select depending on which platform you need.

```json
{
  "extends": ["github>waveshq/standard//renovate-config/web"]
}
```
