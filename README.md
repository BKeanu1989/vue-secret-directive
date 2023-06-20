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
