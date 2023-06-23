# Plugin Example for "Secrets"
After entering the key phrase, all the hidden content is shown.
 

## How to use
this plugin enables the custom directive "v-c-secret"

example usage:
```vue
<template>
   <div v-c-secret>
      some text which is not seen until secret phase is entered
   </div>
</template>
```

## install plugin
### import plugin in app entry file
in your main file:
```ts
import secretDirectivePlugin from './plugins/secret-directive/secret-directive'

app.use(secretDirectivePlugin, {
    secret: 'EXAMPLES-ECRET'
})

```
otherwise the secret is just 'secret'
### include SecretDirective Component
for global access to the secret, we include the secrete directive component in our root view.



----
Error [ERR_INVALID_PACKAGE_CONFIG]: Invalid package config D:\Projects\bkeanu1989.github.io\node_modules\vue3-plugin-secret-directive\package.json while importing file:///D:/Projects/bkeanu1989.github.io/docs/.vuepress/config.ts.628f480e.mjs. "exports" cannot contain some keys starting with '.' and some not. The exports object must either be an object of package subpath keys or an object of main entry condition name keys only.

->
▲ [WARNING] This object cannot contain keys that both start with "." and don't start with "." [package.json]

    package.json:18:4:
      18 │     "/secondary": {

  The key "/secondary" is incompatible with the previous key ".":

    package.json:14:4:
      14 │     ".": {
         ╵     ~~~


event though:
https://vitejs.dev/guide/build.html
```json
{
  "name": "my-lib",
  "type": "module",
  "files": ["dist"],
  "main": "./dist/my-lib.cjs",
  "module": "./dist/my-lib.js",
  "exports": {
    ".": {
      "import": "./dist/my-lib.js",
      "require": "./dist/my-lib.cjs"
    },
    "./secondary": {
      "import": "./dist/secondary.js",
      "require": "./dist/secondary.cjs"
    }
  }
}
```