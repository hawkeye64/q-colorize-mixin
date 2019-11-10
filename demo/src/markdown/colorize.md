QColorizeMixin
===

QColorizeMixin is a Vue Mix-in library for components created with Quasar Framework. It is only for components that use a `render` function. If you want to use it with SFC (Single File Component), then check out last example and working with computed style.

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

$ cd dev
$ yarn

$ cd ..

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
# first time prep (from root folder)
$ cd demo
$ yarn

# for interactive - browser opens automatically
$ quasar dev

# or

# for build - goes to docs folder
$ yarn build-demo
```

# Code Usage

It is important to note that this mixin is intended to be used with Vue **render** functions and not in SFC (single file components). It does not have a render function of its own. If you want to use it with SFC (Single File Component), then check out last example and working with computed style.

## As a Mixin

```js
import Vue from 'vue'
import { QColorizeMixin } from 'q-colorize-mixin'

export default Vue.extend({
  name: 'my-component',

  mixins: [QColorizeMixin], // <- notice use as a Vue mixin
...
```

# Colorize Examples

## Text and Background Color Definition

```js
import Vue from 'vue'
import { QColorizeMixin } from 'q-colorize-mixin'

export default Vue.extend({
  name: 'my-component',

  mixins: [QColorizeMixin],

  props: {
    // color prop is added by colorize mix-in
    // background-color is optional and needs to be added if needed
    bgColor: String
  },

  // whatever renders in the slot will be colorized as
  // long as it inherits the specified color definitions
  render (h) {
    return h('div', this.setBothColors(this.color, this.bgColor, {
      style: {
        width: '200px',
        height: '200px'
      }
    }), [
      this.$slots.default
    ])
  }
})
```

## Border Color Definition

```js
import Vue from 'vue'
import { QColorizeMixin } from 'q-colorize-mixin'

export default Vue.extend({
  name: 'my-component',

  mixins: [QColorizeMixin],

  props: {
    // color prop is added by colorize mix-in
    // background-color is optional and needs to be added if needed
    borderColor: String
  },

  render (h) {
    // whatever renders in the slot will be colorized as
    // long as it inherits the specified color definitions
    return h('div', this.setBorderColor(this.color, this.borderColor, {
      style: {
        width: '200px',
        height: '200px'
      }
    }), [
      this.$slots.default
    ])
  }
})
```

## CSS Vars Definition

All of the CSS in this library will automatically be injected into your app.

```js
import { QColorizeMixin } from 'q-colorize-mixin'

export default Vue.extend({
  name: 'my-component',

  mixins: [QColorizeMixin],

  props: {
    backgroundColor: {
      type: String,
      default: 'primary' // any color
    }
  },

  computed: {
    styles () {
      let style = {}
      style['--qribbon-text-color'] = this.calculateColor(this.color, 'white')
      style['--qribbon-background-color'] = this.calculateColor(this.backgroundColor) // Notice default is against the prop in this instance
      return style
    }
  },

  ...

  render (h) {
    // whatever renders in the slot will be colorized as
    // long as it inherits the specified color definitions
    return h('div', {
      style: this.styles
    }, [
      this.$slots.default
    ])
  }
})
```
