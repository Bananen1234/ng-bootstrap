// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  version: (() => {
    let version = '';
    try {
      version = require('../../dist/lib/package.json').version;
    } catch (e) {
      version = 'n/a';
    }
    return version;
  })(),
  travis_build_number: '__TRAVIS_BUILD_NUMBER__',
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
