## next-i18next shared translations example

Modified version of [next-i18next "simple" example](https://github.com/i18next/next-i18next/tree/53b7a049266be676ad2d99dd5f62b4d9b5cdc44c/examples/simple).

Showcases the ability to load translations conditionally from a directory other than `public` based on the namespace (or locale).

### Approach

[next-i18next.config.js](./next-i18next.config.js), uses a `localePath` function which checks the namespace. In order for next-i18next to work, `ns` and `serializeConfig: false` need to be provided.

Passing the next-i18next configuration to `appWithTranslation` in [./pages/_app.tsx](./pages/_app.tsx) and each page's `serverSideTranslations`.

The `footer` content is loaded from `non-public` (`node_modules` also works but only tested on Mac where `cp` is available, after running `npm run dev:setup`).

```js
  localePath(locale, namespace) {
    if (namespace === 'footer') {
      return `./non-public/locales/${locale}/${namespace}.json`;
    }
    return `./public/locales/${locale}/${namespace}.json`;
  },
```