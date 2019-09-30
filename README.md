# QColorizeMixin

<img src="https://img.shields.io/npm/v/mixin.svg?label=mixin">

QColorizeMixin
===

QColorizeMixin is a Vue Mix-in library for components created with Quasar Framework. It is only for components that use a `render` function. It does not work with template formats found with SFC (single file components).

# Features

Allows you to "skin" your component with customized text, background and border colors. You can use:
1. any color from the [Quasar Color Palette](https://quasar.dev/style/color-palette#Color-List),
2. any # color (ex: `#c0c0c0`),
3. rgb/rgba/hsl/hsla color (ex: `rgb(255,0,0)`),
4. any css named colors (ex: `ghostwhite`) or
5. any Quasar colors from css var (ex: `--q-color-red-10`)
6. any Quasar colors as `border-` (ex: `border-blue-grey-10`)

This is a lot of choices!

# Install
To add this mix-in to your Quasar application, run the following (in your Quasar app folder):

```bash
yarn add q-colorize-mixin

# or

npm install q-colorize-mixin
```

# Uninstall
To remove this mix-in from your Quasar application, run the following (in your Quasar app folder):

```bash
yarn remove q-colorize-mixin

# or

npm remove q-colorize-mixin
```

# Documentation and Examples
Examples with code can be found [here](https://hawkeye64.github.io/q-colorize-mixin/examples).

# Demo Project (source)
Source for the demo application can be found [here](https://github.com/hawkeye64/q-colorize-mixin/tree/master/demo).

# Setup
```bash
$ cd ui

$ yarn
```

# Developing
```bash
# start dev in SPA mode
$ yarn dev
```

# Building package
```bash
$ yarn build
```

# Building Demo
```bash
# first time prep
$ cd ui
$ yarn link
$ cd ../demo
$ yarn link "q-colorize-mixin"

# for interactive - browser opens automatically
$ quasar dev

# for build - goes to docs folder
$ yarn build-demo
```

# Donate
If you appreciate the work that went into this, please consider [donating to Quasar](https://donate.quasar.dev).

# License
MIT (c) Jeff Galbraith <jeff@quasar.dev>
