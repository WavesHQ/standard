# Typescript

`@waveshq/standard-typescript`

Within your `tsconfig.json`:

```json
{
  "extends": "@waveshq/standard-typescript/tsconfig.json",
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  },
  "include": ["src"]
}
```

Within your `tsconfig.build.json`:

```json
{
  "extends": "./tsconfig.json",
  "exclude": ["**/*.unit.ts"]
}
```
