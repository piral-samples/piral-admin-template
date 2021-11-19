[![Piral Logo](https://github.com/smapiot/piral/raw/develop/docs/assets/logo.png)](https://piral.io)

# [Piral Sample](https://piral.io) &middot; [![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/smapiot/piral/blob/main/LICENSE) [![Gitter Chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/piral-io/community)

> piral-admin-template

:zap: A monorepo template for creating an Admin UI with Piral. 

The component system of this sample is based on [tabler-react](http://tabler-react.com).

Provides a great starting point for building modular (Admin) UI interfaces. Different repositories? Monorepo? Hybrid? You decide.

You can visit this demo at [admin-template.samples.piral.cloud/](https://admin-template.samples.piral.cloud/).

## Getting Started

First, use `lerna` to bootstrap the mono repo. Make sure to have `yarn` (v1) installed for this.

```sh
npx lerna bootstrap
```

## Running the Code

Now you can run all pilets:

```sh
yarn watch:all
```

Alternatively, run only a single pilet (e.g., the `pilet-status`):

```sh
name=status yarn watch:pilet
```

Or if you wan to, you can also run the app shell in isolation:

```sh
yarn watch:portal
```

## Adding a new pilet

Just run

```sh
name=foo yarn add:pilet
```

it will create a new directory *packages/pilet-foo*, already scaffolded and integrated. Choose a different run than **foo** for your purposes.

## License

Piral and this sample code is released using the MIT license. For more information see the [license file](./LICENSE).

