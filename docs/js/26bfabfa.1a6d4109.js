(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["26bfabfa"],{2514:function(e,o,t){"use strict";var r=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[t("section",{staticClass:"page-header"},[t("div",{staticClass:"text-h1 project-name"},[e._v("QColorizeMixin")]),t("div",{staticClass:"text-h2 project-tagline"},[e._v("Mixin library for Vue Render Functions")]),t("div",{staticClass:"byline"},[e._v("Created and maintained by Jeff Galbraith")]),t("div",{staticClass:"quasar"},[e._v("A Quasar Framework App Extension")]),t("q-btn",{staticClass:"btn",attrs:{type:"a",href:"https://github.com/hawkeye64/app-extension-colorize",target:"_blank",label:"View on GitHub","no-caps":"",flat:""}}),t("q-btn",{staticClass:"btn",attrs:{to:"/docs",label:"Docs","no-caps":"",flat:""}}),t("q-btn",{staticClass:"btn",attrs:{to:"/examples",label:"Examples","no-caps":"",flat:""}}),t("q-btn",{staticClass:"btn",attrs:{type:"a",href:"https://donate.quasar.dev",target:"_blank",label:"Donate","no-caps":"",flat:""}})],1),t("main",{staticClass:"flex flex-start justify-center inset-shadow"},[t("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg inset-shadow",staticStyle:{width:"100%",height:"3px"}}),t("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg bg-white shadow-1",staticStyle:{"max-width":"800px",width:"100%"}},[e._t("default")],2)])])},n=[],a={name:"Hero"},s=a,l=t("2877"),i=Object(l["a"])(s,r,n,!1,null,null,null);o["a"]=i.exports},"37a6":function(e){e.exports=JSON.parse('{"type":"mixin","props":{"theme-enabled":{"type":"Boolean","category":"style","desc":"Turns theming on or off"},"theme":{"type":"Object","category":"style","desc":"A customized theme definition (see examples above)","__exemption":["examples"]}},"methods":{"useDefaultTheme":{"desc":"Used as a placeholder when theming is turned off (replaces `setBothColors` in Colorize mixin)","__exemption":["examples"],"params":{"color":{"type":"String","desc":"Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette) or a CSS color (#, rgb, rgba, hls, etc)","__exemption":["examples"]},"bgColor":{"type":"String","desc":"Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette) or a CSS color (#, rgb, rgba, hls, etc)","__exemption":["examples"]},"data":{"type":"Object","desc":"Typically the `{ }` of a render function","__exemption":["examples"]}},"returns":{"type":"Object","desc":"The passed in `data` with no modifications"}},"getThemeColors":{"desc":"Returns a Map of theme items based on passed in keys","__exemption":["examples"],"params":{"keys":{"type":"Array","desc":"An arry of keys to return from the `theme` object","__exemption":["examples"]}},"returns":{"type":"Map","desc":"Returns a Map of theme items based on passed in keys"}}}}')},"3aaa":function(e){e.exports=JSON.parse('{"type":"mixin","props":{"color":{"type":"String","category":"style","desc":"Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette) or a CSS color (#, rgb, rgba, hls, etc)","examples":["color=\\"orange-8\\"","color=\\"#c8c8c8\\""]}},"methods":{"setTextColor":{"desc":"Sets the text color of the passed in object. Function determines if passed in `color` is a Quasar color or CSS color","__exemption":["examples"],"params":{"color":{"type":"String","desc":"Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette) or a CSS color (#, rgb, rgba, hls, etc)","__exemption":["examples"]},"data":{"type":"Object","desc":"Typically the `{ }` of a render function","__exemption":["examples"]}},"returns":{"type":"Object","desc":"The passed in `data` with modifications"}},"setBackgroundColor":{"desc":"Sets the background color of the passed in object. Function determines if passed in `color` is a Quasar color or CSS color","__exemption":["examples"],"params":{"color":{"type":"String","desc":"Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette) or a CSS color (#, rgb, rgba, hls, etc)","__exemption":["examples"]},"data":{"type":"Object","desc":"Typically the `{ }` of a render function","__exemption":["examples"]}},"returns":{"type":"Object","desc":"The passed in `data` with modifications"}},"setBorderColor":{"desc":"Sets the border color of the passed in object. Function determines if passed in `color` is a Quasar color or CSS color","__exemption":["examples"],"params":{"color":{"type":"String","desc":"Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette) or a CSS color (#, rgb, rgba, hls, etc)","__exemption":["examples"]},"data":{"type":"Object","desc":"Typically the `{ }` of a render function","__exemption":["examples"]}},"returns":{"type":"Object","desc":"The passed in `data` with modifications"},"setBothColors":{"desc":"Combination of `setTextColor` and `setBackgroundColor`","__exemption":["examples"],"params":{"color":{"type":"String","desc":"Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette) or a CSS color (#, rgb, rgba, hls, etc)","__exemption":["examples"]},"bgColor":{"type":"String","desc":"Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette) or a CSS color (#, rgb, rgba, hls, etc)","__exemption":["examples"]},"data":{"type":"Object","desc":"Typically the `{ }` of a render function","__exemption":["examples"]}},"returns":{"type":"Object","desc":"The passed in `data` with modifications"}}},"isNamedCssColor":{"desc":"Returns true if passed in color is a css named color","__exemption":["examples"],"params":{"color":{"type":"String","desc":"Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette) or a CSS color (#, rgb, rgba, hls, etc)","examples":["isNamedCssColor(\'slateblue\')","isNamedCssColor(\'whitesmoke\')"]}},"returns":{"type":"Boolean","desc":"Returns true if passed in color is a css named color"}},"isCssColor":{"desc":"Returns true if passed in color is a named color, hex color or rgb/rgba/hsl/hsla color","__exemption":["examples"],"params":{"color":{"type":"String","desc":"Any CSS named color, hex color or rgb/rgba/hsl/hsla color","examples":["isCssColor(\'transparent\')","isCssColor(\'#c0c0c0\')","isCssColor(\'oldlace\')","isCssColor(\'rgba(255,0,0,0.2)\')","isCssColor(\'--orange-8\')"]}},"returns":{"type":"Boolean","desc":"Returns true if passed in color is a named color, hex color or rgb/rgba/hsl/hsla color"}},"isCssVar":{"desc":"Returns true if passed in color is a CSS variable starting with `--`","__exemption":["examples"],"params":{"color":{"type":"String","desc":"Any css var color","examples":["isCssVar(\'--orange-8\')","isCssVar(\'--blue-grey-6\')"]}},"returns":{"type":"Boolean","desc":"Returns true if passed in color is a CSS variable starting with `--`"}},"calculateColor":{"desc":"Check if a color is a standard CSS color or a Quasar color (if Quasar, returns the calculated Quasar color)","__exemption":["examples"],"params":{"color":{"type":"String","desc":"Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette), CSS color (#, rgb, rgba, hls, etc), or CSS var color","__exemption":["examples"]},"defaultColor":{"type":"String","desc":"","default":"black","__exemption":["examples"]}},"returns":{"type":"String","desc":"The calculated color"}},"makeQuasarColorVar":{"desc":"Generate a CSS variable definition based on the quasar color or existing variable passed in","examples":["var(--q-color-red-5, \'default\')"],"params":{"color":{"type":"String","desc":"Any color from the [Quasar Color Pallete](https://quasar.dev/style/color-palette), CSS color (#, rgb, rgba, hls, etc), or CSS var color","__exemption":["examples"]},"defaultColor":{"type":"String","desc":"","default":"black","__exemption":["examples"]}},"returns":{"type":"String","desc":"The generated CSS variable definition"}}}}')},"8b24":function(e,o,t){"use strict";t.r(o);var r=function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("hero",[t("q-markdown",{attrs:{src:e.markdown,toc:""},on:{data:e.onToc}}),t("component-api",{attrs:{title:"Colorize API",json:e.colorizeJson,type:"Vue Mixin"}}),t("component-api",{attrs:{title:"Theme API",json:e.themeJson,type:"Vue Mixin"}}),t("q-markdown",[e._v("\n# Donate\nIf you appreciate the work that went into this App Extension, please consider [donating to Quasar](https://donate.quasar.dev).\n\n---\nThis page created with [QMarkdown](https://quasarframework.github.io/app-extension-qmarkdown), another great Quasar App Extension.\n    ")]),t("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":150,offset:[18,18]}},[t("q-btn",{attrs:{fab:"",icon:"keyboard_arrow_up",color:"primary"}})],1)],1)},n=[],a=t("2514"),s="QColorizeMixin\n===\n\nQColorizeMixin is a Vue Mix-in library for components created with Quasar Framework. It is only for components that use a `render` function. It does not work with template formats found with SFC (single file components).\n\n# Features\n\nAllows you to \"skin\" your component with customized text, background and border colors. You can use:\n1. any color from the [Quasar Color Palette](https://quasar.dev/style/color-palette#Color-List),\n2. any # color (ex: `#c0c0c0`),\n3. rgb/rgba/hsl/hsla color (ex: `rgb(255,0,0)`),\n4. any css named colors (ex: `ghostwhite`) or\n5. any Quasar colors from css var (ex: `--q-color-red-10`)\n6. any Quasar colors as `border-` (ex: `border-blue-grey-10`)\n\nThis is a lot of choices!\n\n# Install\nTo add this mix-in to your Quasar application, run the following (in your Quasar app folder):\n\n```bash\nyarn add q-colorize-mixin\n\n# or\n\nnpm install q-colorize-mixin\n```\n\n# Uninstall\nTo remove this mix-in from your Quasar application, run the following (in your Quasar app folder):\n\n```bash\nyarn remove q-colorize-mixin\n\n# or\n\nnpm remove q-colorize-mixin\n```\n\n# Examples\nExamples with code can be found [here](https://hawkeye64.github.io/q-colorize-mixin/examples).\n\n# Demo Project (source)\nSource for this application can be found [here](https://github.com/hawkeye64/q-colorize-mixin/tree/master/demo).\n\n# Code Usage\n\nIt is important to note that this mixin is intended to be used with Vue **render** functions and not in SFC (single file components). It does not have a render function of its own.\n\n## As a Mixin\n\n```js\nimport Vue from 'vue'\nimport QColorizeMixin from 'q-colorize-mixin'\n\nexport default Vue.extend({\n  name: 'my-component',\n\n  mixins: [QColorizeMixin], // <- notice use as a Vue mixin\n...\n```\n\n# Simple Examples\n\n## Colorize\n\n### Use Text and Background Color Definition\n\n```js\nimport Vue from 'vue'\nimport QColorizeMixin from 'q-colorize-mixin'\n\nexport default Vue.extend({\n  name: 'my-component',\n\n  mixins: [QColorizeMixin],\n\n  props: {\n    // color prop is added by colorize mix-in\n    // background-color is optional and needs to be added if needed\n    bgColor: String\n  },\n\n  render (h) {\n    return h('div', this.setBothColors(this.color, this.bgColor, {\n      style: {\n        width: '200px',\n        height: '200px'\n      }\n    }), [\n      this.$slots.default\n    ])\n  }\n})\n```\n\n### Use Border Color Definition\n\n```js\nimport Vue from 'vue'\nimport QColorizeMixin from 'q-colorize-mixin'\n\nexport default Vue.extend({\n  name: 'my-component',\n\n  mixins: [QColorizeMixin],\n\n  props: {\n    // color prop is added by colorize mix-in\n    // background-color is optional and needs to be added if needed\n    borderColor: String\n  },\n\n  render (h) {\n    return h('div', this.setBorderColor(this.color, this.borderColor, {\n      style: {\n        width: '200px',\n        height: '200px'\n      }\n    }), [\n      this.$slots.default\n    ])\n  }\n})\n```\n\n### Use CSS Vars\n\nAll of the CSS in this library will autmatically be injected into your app.\n\n```js\nimport QColorizeMixin from 'q-colorize-mixin'\n\nexport default Vue.extend({\n  name: 'my-component',\n\n  mixins: [QColorizeMixin],\n\n  props: {\n    backgroundColor: {\n      type: String,\n      default: 'primary' // any color\n    }\n  },\n\n  computed: {\n    styles () {\n      let style = {}\n      style['--qribbon-text-color'] = this.calculateColor(this.color, 'white')\n      style['--qribbon-background-color'] = this.calculateColor(this.backgroundColor) // Notice default is against the prop in this instance\n      return style\n    }\n  },\n\n  ...\n\n  render (h) {\n    return h('div', {\n      style: this.styles\n    }, [\n      this.$slots.default\n    ])\n  }\n})\n```\n",l=t("3aaa"),i=t("37a6"),c={name:"PageIndex",components:{Hero:a["a"]},data:function(){return{markdown:s,colorizeJson:l,themeJson:i}},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(e){this.$store.commit("common/toc",e)}}},methods:{onToc:function(e){e.push({id:"Colorize-API",label:"Colorize API",level:1,children:Array(0)}),e.push({id:"Theme-API",label:"Theme API",level:1,children:Array(0)}),e.push({id:"Donate",label:"Donate",level:1,children:Array(0)}),this.toc=e}}},p=c,d=t("2877"),m=Object(d["a"])(p,r,n,!1,null,null,null);o["default"]=m.exports}}]);