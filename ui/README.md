# Component QColorizeMixin

<img src="https://img.shields.io/npm/v/q-colorize-mixin.svg?label=q-colorize-mixin">

# Component QColorizeMixin
> Short description of the component


# Usage

## Quasar CLI project

```js
import Vue from 'vue'
import QColorizeMixin from 'q-colorize-mixin'

Vue.use(QColorizeMixin)
```

or:

```js
<script>
import QColorizeMixin from 'q-colorize-mixin'

export default {
  components: {
    QColorizeMixin
  }
}
</script>
```

## UMD variant

Exports `window.QColorizeMixin`.

Add the following tag(s) after the Quasar ones:

```html
<head>
  <!-- AFTER the Quasar stylesheet tags: -->
  <link href="https://cdn.jsdelivr.net/npm/q-colorize-mixin/dist/index.min.css" rel="stylesheet" type="text/css">
</head>
<body>
  <!-- at end of body, AFTER Quasar script(s): -->
  <script src="https://cdn.jsdelivr.net/npm/q-colorize-mixin/dist/index.umd.min.js"></script>
</body>
```
If you need the RTL variant of the CSS, then go for the following (instead of the above stylesheet link):
```html
<link href="https://cdn.jsdelivr.net/npm/q-colorize-mixin/dist/index.rtl.min.css" rel="stylesheet" type="text/css">
```

# Setup
```bash
$ yarn
```

# Developing
```bash
# start dev in SPA mode
$ yarn dev

# start dev in UMD mode
$ yarn dev:umd

# start dev in SSR mode
$ yarn dev:ssr

# start dev in Cordova iOS mode
$ yarn dev:ios

# start dev in Cordova Android mode
$ yarn dev:android

# start dev in Electron mode
$ yarn dev:electron
```

# Building package
```bash
$ yarn build
```

# Donate
If you appreciate the work that went into this, please consider [donating to Quasar](https://donate.quasar.dev).

# License
MIT (c) Jeff Galbraith <jeff@quasar.dev>
