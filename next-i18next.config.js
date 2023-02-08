// @ts-check

/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },
  localePath(locale, namespace) {
    if (namespace === 'footer') {
      return `./non-public/locales/${locale}/${namespace}.json`;
      // following only works if you run `dev:setup` and have the `cp` utility available
      // return `./node_modules/@example/locales/${locale}/${namespace}.json`;
    }
    return `./public/locales/${locale}/${namespace}.json`;
  },
  ns: ['common', 'second-page', 'footer'],

  reloadOnPrerender: process.env.NODE_ENV === 'development',
  serializeConfig: false
}
