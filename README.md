# @sebgroup/ng-bootstrap

[![Build Status](https://travis-ci.com/sebgroup/ng-bootstrap.svg?token=tzrdkWGEu776AVobzRhp&branch=master)](https://travis-ci.com/sebgroup/ng-bootstrap)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Getting started

This is a SEB styled theme for [ng-bootstrap](https://ng-bootstrap.github.io/) which includes scss files that are meant to replace the ones provided by ng-bootstrap. See [demo](https://sebgroup.github.io/ng-bootstrap) for more info and examples. Note that this lib also includes `@ng-bootstrap/ng-bootstrap` as a dependency so you don't need to install it yourself unless you want a specific version. Below is a list with minimal versions of libs that are known to work well together.

| @sebgroup/ng-bootstrap | @sebgroup/bootstrap | @ng-bootstrap/ng-bootstrap | angular |
| :--------------------- | :------------------ | :------------------------- | :------ |
| 1.x.x                  | 5.x.x               | 5.x.x                      | 8.x.x   |
| 2.x.x                  | 5.x.x               | 9.x.x                      | 11.x.x  |
| 3.x.x                  | 6.x.x               | 10.x.x                     | 12.x.x  |
| 15.x.x                 | 15.x.x              | 14.x.x                     | 15.x.x  |

### Install with npm

The following command will install @sebgroup/ng-bootstrap as well as @ng-bootstrap/ng-bootstrap (since it's a dependency for this lib).

```
npm install @sebgroup/ng-bootstrap --save
```

### Import module(s)

Import `NgbModule` to include all ng-bootstrap components to your app or just add the ones you need, like `NgModalModule` for example. See example below.

```js
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [AppComponent],
  imports: [
    ...
    NgbModule // <-- Add this line
  ]
})
```

### Import style(s)

Import `ng-bootstrap` to include styles for all ng-bootstrap components or pick and choose from the list below to include just the parts you want\*.

- ngb-accordion (`@import '@sebgroup/ng-bootstrap/scss/styles/ngb-accordion';`)
- ngb-datepicker (`@import '@sebgroup/ng-bootstrap/scss/styles/ngb-datepicker';`)
- ngb-dropdown (`@import '@sebgroup/ng-bootstrap/scss/styles/ngb-dropdown';`)
- ngb-tooltip (`@import '@sebgroup/ng-bootstrap/scss/styles/ngb-tooltip';`)

\* Please note that you need some styles from bootstrap too as this theme relies on [@sebgroup/bootstrap](https://sebgroup.github.io/bootstrap/). See complete example below:

```css
@import '@sebgroup/bootstrap/scss/styles/core';
@import '@sebgroup/bootstrap/scss/styles/reboot';
@import '@sebgroup/bootstrap/scss/styles/modal'; /* needed for modal */
@import '@sebgroup/bootstrap/scss/styles/animations'; /* needed for modal animations */
@import '@sebgroup/ng-bootstrap/scss/ng-bootstrap'; /* <-- Add this line */
@import '@sebgroup/fonts/scss/seb-fonts';
```

For more info please see the [wiki](https://github.com/sebgroup/ng-bootstrap/wiki)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
