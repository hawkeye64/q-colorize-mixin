(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["67ce7fd4"],{"0960":function(n,t,e){"use strict";e.r(t);var o=function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("hero",[o("div",{staticClass:"q-markdown"},[o("example-title",{attrs:{title:"Colorize Basic"}}),o("example-card",{attrs:{title:"Text",name:"ColorizeColor","tag-parts":n.getTagParts(e("5334").default)}}),o("example-card",{attrs:{title:"Background",name:"ColorizeBackground","tag-parts":n.getTagParts(e("eda9").default)}}),o("example-card",{attrs:{title:"Border",name:"ColorizeBorder","tag-parts":n.getTagParts(e("600a").default)}}),o("example-card",{attrs:{title:"Text, Background and Border",name:"ColorizeBoth","tag-parts":n.getTagParts(e("2175").default)}}),o("example-title",{attrs:{title:"Colorize Advanced"}}),o("q-markdown",[n._v("\nFor all examples below that take an input, you can manually enter any valid color as well. Here are some ideas you can try:\n\n| Color | Type |\n| --- | --- |\n| purple-7 | Quasar color palette |\n| --q-color-green-5 | Quasar css var color |\n| rgb(255, 128, 27) | rgb color |\n| hsl(120, 100%, 50%) | hsl color |\n| coral | CSS named color |\n\n      ")]),o("example-card",{attrs:{title:"Text with Input",name:"ColorizeColorSelection","tag-parts":n.getTagParts(e("a77b").default)}}),o("example-card",{attrs:{title:"Background with Input",name:"ColorizeBackgroundSelection","tag-parts":n.getTagParts(e("6519").default)}}),o("example-card",{attrs:{title:"Border with Input",name:"ColorizeBorderSelection","tag-parts":n.getTagParts(e("6519").default)}}),o("example-card",{attrs:{title:"Text, Background and Border with Input",name:"ColorizeBothSelection","tag-parts":n.getTagParts(e("71b2").default)}})],1)])},r=[],a=e("2514"),i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("h1",{staticClass:"q-markdown--heading-h1 q-markdown--title-heavy example-title",attrs:{id:n.slugifiedTitle},on:{click:function(t){return n.copyHeading(n.slugifiedTitle)}}},[n._v(n._s(n.title))])},l=[];e("a481");function s(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Anchor has been copied to clipboard.",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"white",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"primary",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"done",a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"top",i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:2e3,l=window.location.origin+window.location.pathname+"#"+n,s=document.createElement("textarea");s.className="fixed-top",s.value=l,document.body.appendChild(s),s.focus(),s.select(),document.execCommand("copy"),document.body.removeChild(s),this.$q.notify({message:t,color:e,textColor:o,icon:r,position:a,timeout:i})}function d(n){return encodeURIComponent(String(n).trim().replace(/\s+/g,"-"))}var c={name:"ExampleTitle",props:{title:{type:String,required:!0}},computed:{slugifiedTitle:function(){return d(this.title)}},methods:{copyHeading:s}},p=c,m=e("2877"),u=Object(m["a"])(p,i,l,!1,null,null,null),h=u.exports,g=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{staticClass:"q-pa-md overflow-auto",attrs:{id:n.slugifiedTitle}},[e("q-card",{staticClass:"no-shadow",attrs:{flat:"",bordered:""}},[e("q-toolbar",[e("q-ribbon",{attrs:{position:"left",color:"rgba(0,0,0,.58)","background-color":"#c0c0c0","leaf-color":"#a0a0a0","leaf-position":"bottom",decoration:"rounded-out"}},[e("q-toolbar-title",{staticClass:"example-title",staticStyle:{padding:"5px 20px"},on:{click:function(t){return n.copyHeading(n.slugifiedTitle)}}},[e("span",{staticClass:"ellipsis"},[n._v(n._s(n.title))])])],1)],1),e("q-separator"),e("q-expansion-item",{attrs:{group:"someGroup",caption:"Code"}},[e("q-card",[e("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"left","narrow-indicator":""},model:{value:n.tab,callback:function(t){n.tab=t},expression:"tab"}},[n.parts.template?e("q-tab",{attrs:{name:"template",label:"Template"}}):n._e(),n.parts.script?e("q-tab",{attrs:{name:"script",label:"Script"}}):n._e(),n.parts.style?e("q-tab",{attrs:{name:"style",label:"Style"}}):n._e()],1),e("q-separator"),e("q-tab-panels",{attrs:{animated:""},model:{value:n.tab,callback:function(t){n.tab=t},expression:"tab"}},[n.parts.template?e("q-tab-panel",{attrs:{name:"template"}},[e("q-markdown",{attrs:{src:n.parts.template}})],1):n._e(),n.parts.script?e("q-tab-panel",{attrs:{name:"script"}},[e("q-markdown",{attrs:{src:n.parts.script}})],1):n._e(),n.parts.style?e("q-tab-panel",{attrs:{name:"style"}},[e("q-markdown",{attrs:{src:n.parts.style}})],1):n._e()],1)],1)],1),e("q-separator"),e(n.name,{tag:"component",staticStyle:{overflow:"hidden"}})],1)],1)},x=[],f=(e("ac6a"),e("cadf"),e("06db"),e("456d"),{name:"ExampleCard",props:{title:{type:String,required:!0},name:{type:String,required:!0},tagParts:{type:Object,default:function(){}}},data:function(){return{tab:"template",parts:{}}},mounted:function(){this.updateParts()},computed:{slugifiedTitle:function(){return d(this.title)}},methods:{copyHeading:s,updateParts:function(){var n=this;this.parts={},Object.keys(this.tagParts).forEach((function(t){""!==n.tagParts[t]&&(n.parts[t]="```\n"+n.tagParts[t]+"\n```")}))}}}),b=f,C=Object(m["a"])(b,g,x,!1,null,null,null),v=C.exports,y=function(n){var t,e={},o=q(n);o&&o.length>0&&(e.template=o);var r=document.createElement("html");return r.innerHTML=n,t=r.getElementsByTagName("script"),t.length>0&&(e.script=t[0].outerHTML),t=r.getElementsByTagName("style"),t.length>0&&(e.style=t[0].outerHTML),e},q=function(n){var t="";if(n&&n.length>0){var e="<template",o="</template>",r=n.indexOf(e),a=n.lastIndexOf(o);r>-1&&a>-1&&(t=n.substring(r,a+o.length))}return t},T={name:"Examples",components:{Hero:a["a"],ExampleTitle:h,ExampleCard:v},data:function(){return{tempToc:[]}},mounted:function(){this.toc=[],this.tempToc=[],this.addToToc("Colorize Basic"),this.addToToc("Text",2),this.addToToc("Background",2),this.addToToc("Border",2),this.addToToc("Text, Background and Border",2),this.addToToc("Colorize Advanced"),this.addToToc("Text with Input",2),this.addToToc("Background with Input",2),this.addToToc("Border with Input",2),this.addToToc("Text, Background and Border with Input",2),this.toc=this.tempToc},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(n){this.$store.commit("common/toc",n)}}},methods:{getTagParts:y,addToToc:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=d(n);this.tempToc.push({children:[],id:e,label:n,level:t})}}},w=T,z=(e("e872"),Object(m["a"])(w,o,r,!1,null,null,null));t["default"]=z.exports},"17bf":function(n,t,e){},2175:function(n,t,e){"use strict";e.r(t),t["default"]="<template>\n  <div class=\"q-pa-md row justify-around\">\n    <my-component\n      :color=\"color\"\n      :bg-color=\"bgColor\"\n      :border-color=\"borderColor\"\n      class=\"text-center\"\n    >\n      <div class=\"text-h4\">Some Text</div>\n    </my-component>\n  </div>\n</template>\n\n<script>\nimport Vue from 'vue'\nimport { QColorizeMixin } from 'q-colorize-mixin'\n\nconst MyComponent = Vue.extend({\n  name: 'my-component',\n\n  mixins: [QColorizeMixin],\n\n  props: {\n    // color prop is added by colorize mix-in\n    // background-color is optional and needs to be added if needed\n    bgColor: String,\n    borderColor: String\n  },\n\n  render (h) {\n    return h('div', this.setBorderColor(this.borderColor, this.setBothColors(this.color, this.bgColor, {\n      style: {\n        width: '200px',\n        height: '200px',\n        borderStyle: 'solid',\n        borderWidth: '10px'\n      }\n    })), [\n      this.$slots.default\n    ])\n  }\n})\n\nexport default {\n  components: {\n    MyComponent\n  },\n\n  data () {\n    return {\n      color: '#FFFF00',\n      bgColor: '#FF0000',\n      borderColor: '#00FAFA'\n    }\n  }\n}\n<\/script>\n"},2514:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("section",{staticClass:"page-header"},[e("div",{staticClass:"text-h1 project-name"},[n._v("QColorizeMixin")]),e("div",{staticClass:"text-h2 project-tagline"},[n._v("Mixin library for Vue Render Functions")]),e("div",{staticClass:"byline"},[n._v("Created and maintained by Jeff Galbraith")]),e("div",{staticClass:"quasar"},[n._v("A Quasar Framework Mix-in")]),e("q-btn",{staticClass:"btn",attrs:{type:"a",href:"https://github.com/hawkeye64/q-colorize-mixin",target:"_blank",label:"View on GitHub","no-caps":"",flat:""}}),e("q-btn",{staticClass:"btn",attrs:{to:"/docs",label:"Docs","no-caps":"",flat:""}}),e("q-btn",{staticClass:"btn",attrs:{to:"/examples",label:"Examples","no-caps":"",flat:""}}),e("q-btn",{staticClass:"btn",attrs:{type:"a",href:"https://donate.quasar.dev",target:"_blank",label:"Donate","no-caps":"",flat:""}})],1),e("main",{staticClass:"flex flex-start justify-center inset-shadow"},[e("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg inset-shadow",staticStyle:{width:"100%",height:"3px"}}),e("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg bg-white shadow-1",staticStyle:{"max-width":"800px",width:"100%"}},[n._t("default")],2)])])},r=[],a={name:"Hero"},i=a,l=e("2877"),s=Object(l["a"])(i,o,r,!1,null,null,null);t["a"]=s.exports},5334:function(n,t,e){"use strict";e.r(t),t["default"]="<template>\n  <div class=\"q-pa-md row justify-around\">\n    <my-component\n      :color=\"color\"\n    >\n      <div class=\"text-h4\">Some Text</div>\n    </my-component>\n  </div>\n</template>\n\n<script>\nimport Vue from 'vue'\nimport { QColorizeMixin } from 'q-colorize-mixin'\n\nconst MyComponent = Vue.extend({\n  name: 'my-component',\n\n  mixins: [QColorizeMixin],\n\n  render (h) {\n    return h('div', this.setTextColor(this.color, {\n      style: {\n        width: '200px',\n        height: '200px'\n      }\n    }), [\n      this.$slots.default\n    ])\n  }\n})\n\nexport default {\n  name: 'ColorizeColor',\n\n  components: {\n    MyComponent\n  },\n\n  data () {\n    return {\n      color: '#FF0000'\n    }\n  }\n}\n<\/script>\n"},"600a":function(n,t,e){"use strict";e.r(t),t["default"]="<template>\n  <div class=\"q-pa-md row justify-around\">\n    <my-component\n      :border-color=\"borderColor\"\n    />\n  </div>\n</template>\n\n<script>\nimport Vue from 'vue'\nimport { QColorizeMixin } from 'q-colorize-mixin'\n\nconst MyComponent = Vue.extend({\n  name: 'my-component',\n\n  mixins: [QColorizeMixin],\n\n  props: {\n    borderColor: String\n  },\n\n  data () {\n    return {\n    }\n  },\n\n  render (h) {\n    return h('div', this.setBorderColor(this.borderColor, {\n      style: {\n        width: '200px',\n        height: '200px',\n        borderStyle: 'solid',\n        borderWidth: '10px'\n      }\n    }))\n  }\n})\n\nexport default {\n  components: {\n    MyComponent\n  },\n\n  data () {\n    return {\n      borderColor: 'purple-14'\n    }\n  }\n}\n<\/script>\n"},6519:function(n,t,e){"use strict";e.r(t),t["default"]='<template>\n  <div class="q-pa-md">\n    <div class="q-pb-md q-gutter-md row justify-around">\n      <q-input\n        filled\n        v-model="bgColor"\n      >\n        <template v-slot:append>\n          <q-icon name="colorize" class="cursor-pointer">\n            <q-popup-proxy transition-show="scale" transition-hide="scale">\n              <q-color v-model="bgColor" />\n            </q-popup-proxy>\n          </q-icon>\n        </template>\n      </q-input>\n    </div>\n    <q-separator />\n    <div class="q-pa-md row justify-around">\n      <my-component\n        :bg-color="bgColor"\n      >\n        <div class="text-h4">Some Text</div>\n      </my-component>\n    </div>\n  </div>\n</template>\n\n<script>\nimport Vue from \'vue\'\nimport { QColorizeMixin } from \'q-colorize-mixin\'\n\nconst MyComponent = Vue.extend({\n  name: \'my-component\',\n\n  mixins: [QColorizeMixin],\n\n  props: {\n    // color prop is added by colorize mix-in\n    // background-color is optional and needs to be added if needed\n    bgColor: String\n  },\n\n  render (h) {\n    return h(\'div\', this.setBackgroundColor(this.bgColor, {\n      style: {\n        width: \'200px\',\n        height: \'200px\'\n      }\n    }))\n  }\n})\n\nexport default {\n  components: {\n    MyComponent\n  },\n\n  data () {\n    return {\n      bgColor: \'#FF0000\'\n    }\n  }\n}\n<\/script>\n'},"71b2":function(n,t,e){"use strict";e.r(t),t["default"]='<template>\n<div class="q-pa-md">\n    <div class="q-pb-md q-gutter-md row justify-around">\n      <q-input\n        filled\n        v-model="color"\n      >\n        <template v-slot:append>\n          <q-icon name="colorize" class="cursor-pointer">\n            <q-popup-proxy transition-show="scale" transition-hide="scale">\n              <q-color v-model="color" />\n            </q-popup-proxy>\n          </q-icon>\n        </template>\n      </q-input>\n\n      <q-input\n        filled\n        v-model="bgColor"\n      >\n        <template v-slot:append>\n          <q-icon name="colorize" class="cursor-pointer">\n            <q-popup-proxy transition-show="scale" transition-hide="scale">\n              <q-color v-model="bgColor" />\n            </q-popup-proxy>\n          </q-icon>\n        </template>\n      </q-input>\n\n      <q-input\n        filled\n        v-model="borderColor"\n      >\n        <template v-slot:append>\n          <q-icon name="colorize" class="cursor-pointer">\n            <q-popup-proxy transition-show="scale" transition-hide="scale">\n              <q-color v-model="borderColor" />\n            </q-popup-proxy>\n          </q-icon>\n        </template>\n      </q-input>\n    </div>\n    <q-separator />\n    <div class="q-pa-md row justify-around">\n      <my-component\n        :color="color"\n        :bg-color="bgColor"\n        :borderColor="borderColor"\n        class="text-center"\n      >\n        <div class="text-h4">Some Text</div>\n      </my-component>\n    </div>\n  </div>\n</template>\n\n<script>\nimport Vue from \'vue\'\nimport { QColorizeMixin } from \'q-colorize-mixin\'\n\nconst MyComponent = Vue.extend({\n  name: \'my-component\',\n\n  mixins: [QColorizeMixin],\n\n  props: {\n    // color prop is added by colorize mix-in\n    // background-color is optional and needs to be added if needed\n    bgColor: String,\n    borderColor: String\n  },\n\n  render (h) {\n    return h(\'div\', this.setBorderColor(this.borderColor, this.setBothColors(this.color, this.bgColor, {\n      style: {\n        width: \'200px\',\n        height: \'200px\',\n        borderStyle: \'solid\',\n        borderWidth: \'10px\'\n      }\n    })), [\n      this.$slots.default\n    ])\n  }\n})\n\nexport default {\n  components: {\n    MyComponent\n  },\n\n  data () {\n    return {\n      color: \'#FFFF00\',\n      bgColor: \'#FF0000\',\n      borderColor: \'#00FAFA\'\n    }\n  }\n}\n<\/script>\n'},a77b:function(n,t,e){"use strict";e.r(t),t["default"]='<template>\n  <div class="q-pa-md">\n    <div class="q-pb-md q-gutter-md row justify-around">\n      <q-input\n        filled\n        v-model="color"\n      >\n        <template v-slot:append>\n          <q-icon name="colorize" class="cursor-pointer">\n            <q-popup-proxy transition-show="scale" transition-hide="scale">\n              <q-color v-model="color" />\n            </q-popup-proxy>\n          </q-icon>\n        </template>\n      </q-input>\n    </div>\n    <q-separator />\n    <div class="q-pa-md row justify-around">\n      <my-component\n        :color="color"\n      >\n        <div class="text-h4">Some Text</div>\n      </my-component>\n    </div>\n  </div>\n</template>\n\n<script>\nimport Vue from \'vue\'\nimport { QColorizeMixin } from \'q-colorize-mixin\'\n\nconst MyComponent = Vue.extend({\n  name: \'my-component\',\n\n  mixins: [QColorizeMixin],\n\n  render (h) {\n    return h(\'div\', this.setTextColor(this.color, {\n      style: {\n        width: \'200px\',\n        height: \'200px\'\n      }\n    }), [\n      this.$slots.default\n    ])\n  }\n})\n\nexport default {\n  components: {\n    MyComponent\n  },\n\n  data () {\n    return {\n      color: \'#FF0000\'\n    }\n  },\n\n  methods: {\n    selectColor () {\n    }\n  }\n}\n<\/script>\n'},e872:function(n,t,e){"use strict";var o=e("17bf"),r=e.n(o);r.a},eda9:function(n,t,e){"use strict";e.r(t),t["default"]="<template>\n  <div class=\"q-pa-md row justify-around\">\n    <my-component\n      :bg-color=\"bgColor\"\n    />\n  </div>\n</template>\n\n<script>\nimport Vue from 'vue'\nimport { QColorizeMixin } from 'q-colorize-mixin'\n\nconst MyComponent = Vue.extend({\n  name: 'my-component',\n\n  mixins: [QColorizeMixin],\n\n  props: {\n    // color prop is added by colorize mix-in\n    // background-color is optional and needs to be added if needed\n    bgColor: String\n  },\n\n  data () {\n    return {\n    }\n  },\n\n  render (h) {\n    return h('div', this.setBackgroundColor(this.bgColor, {\n      style: {\n        width: '200px',\n        height: '200px'\n      }\n    }))\n  }\n})\n\nexport default {\n  components: {\n    MyComponent\n  },\n\n  data () {\n    return {\n      bgColor: '#FF0000'\n    }\n  }\n}\n<\/script>\n"}}]);