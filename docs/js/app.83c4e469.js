(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(o,e,r){o.exports=r("2f39")},"0047":function(o,e,r){},"018e":function(o,e){},"2f39":function(o,e,r){"use strict";r.r(e);var t={};r.r(t),r.d(t,"toc",(function(){return oo}));var n={};r.r(n),r.d(n,"toc",(function(){return eo}));var a=r("967e"),l=r.n(a),i=(r("a481"),r("96cf"),r("fa84")),s=r.n(i),c=(r("5c7d"),r("573e"),r("7d6e"),r("e54f"),r("985d"),r("0047"),r("2913"),r("b7f2"),r("5503"),r("e191"),r("d5b2"),r("2cd3"),r("2b0e")),u=r("b05d"),d=r("9c40"),p=r("f09f"),b=r("8f8e"),f=r("b498"),m=r("9404"),h=r("3b73"),C=r("e359"),g=r("0016"),y=r("27f9"),v=r("66e5"),x=r("0170"),w=r("4074"),k=r("3845"),q=r("4d5a"),j=r("1c1c"),S=r("9989"),Q=r("09e3"),_=r("5096"),O=r("7cbe"),F=r("3786"),B=r("4983"),z=r("ddd8"),T=r("eb85"),P=r("7460"),E=r("823b"),$=r("adad"),V=r("429b"),M=r("9564"),D=r("65c6"),A=r("6ac5"),I=r("714f"),N=r("4396"),L=r("2a19"),W=r("0967");c["a"].use(u["a"],{config:{},components:{QBtn:d["a"],QCard:p["a"],QCheckbox:b["a"],QColor:f["a"],QDrawer:m["a"],QExpansionItem:h["a"],QHeader:C["a"],QIcon:g["a"],QInput:y["a"],QItem:v["a"],QItemLabel:x["a"],QItemSection:w["a"],QKnob:k["a"],QLayout:q["a"],QList:j["a"],QPage:S["a"],QPageContainer:Q["a"],QPageScroller:_["a"],QPopupProxy:O["a"],QRadio:F["a"],QScrollArea:B["a"],QSelect:z["a"],QSeparator:T["a"],QTab:P["a"],QTabPanel:E["a"],QTabPanels:$["a"],QTabs:V["a"],QToggle:M["a"],QToolbar:D["a"],QToolbarTitle:A["a"]},directives:{Ripple:I["a"],Scroll:N["a"]},plugins:{Notify:L["a"],Platform:W["b"]}});var J=function(){var o=this,e=o.$createElement,r=o._self._c||e;return r("div",{attrs:{id:"q-app"}},[r("router-view")],1)},R=[],U={name:"App"},H=U,K=r("2877"),G=Object(K["a"])(H,J,R,!1,null,null,null),X=G.exports,Y=r("2f62"),Z={toc:[]},oo=function(o){return o.toc},eo=function(o,e){o.toc=e},ro=r("018e"),to={namespaced:!0,state:Z,getters:t,mutations:n,actions:ro};c["a"].use(Y["a"]);var no=function(){var o=new Y["a"].Store({modules:{common:to},strict:!1});return o},ao=r("8c4f"),lo=[{path:"/",redirect:"/docs"},{path:"/docs",component:function(){return r.e("2d0d5fdf").then(r.bind(null,"713b"))},children:[{path:"",component:function(){return r.e("7654cfe6").then(r.bind(null,"8b24"))}}]},{path:"/examples",component:function(){return r.e("2d0d5fdf").then(r.bind(null,"713b"))},children:[{path:"",component:function(){return r.e("67ce7fd4").then(r.bind(null,"0960"))}}]}];lo.push({path:"*",component:function(){return r.e("4b47640d").then(r.bind(null,"e51e"))}});var io=lo;c["a"].use(ao["a"]);var so=function(){var o=new ao["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:io,mode:"history",base:"/q-colorize-mixin/"});return o},co=function(){var o="function"===typeof no?no({Vue:c["a"]}):no,e="function"===typeof so?so({Vue:c["a"],store:o}):so;o.$router=e;var r={el:"#q-app",router:e,store:o,render:function(o){return o(X)}};return{app:r,store:o,router:e}},uo=(r("e3dd"),function(){var o=this,e=o.$createElement,r=o._self._c||e;return r("div",{staticClass:"q-pa-md row justify-around"},[r("my-component",{attrs:{color:o.color}},[r("div",{staticClass:"text-h4"},[o._v("Some Text")])])],1)}),po=[],bo=r("384e"),fo=c["a"].extend({name:"my-component",mixins:[bo["a"]],render:function(o){return o("div",this.setTextColor(this.color,{style:{width:"200px",height:"200px"}}),[this.$slots.default])}}),mo={name:"ColorizeColor",components:{MyComponent:fo},data:function(){return{color:"#FF0000"}}},ho=mo,Co=Object(K["a"])(ho,uo,po,!1,null,null,null),go=Co.exports,yo=function(){var o=this,e=o.$createElement,r=o._self._c||e;return r("div",{staticClass:"q-pa-md row justify-around"},[r("my-component",{attrs:{"bg-color":o.bgColor}})],1)},vo=[],xo=c["a"].extend({name:"my-component",mixins:[bo["a"]],props:{bgColor:String},data:function(){return{}},render:function(o){return o("div",this.setBackgroundColor(this.bgColor,{style:{width:"200px",height:"200px"}}))}}),wo={components:{MyComponent:xo},data:function(){return{bgColor:"#FF0000"}}},ko=wo,qo=Object(K["a"])(ko,yo,vo,!1,null,null,null),jo=qo.exports,So=function(){var o=this,e=o.$createElement,r=o._self._c||e;return r("div",{staticClass:"q-pa-md row justify-around"},[r("my-component",{attrs:{"border-color":o.borderColor}})],1)},Qo=[],_o=c["a"].extend({name:"my-component",mixins:[bo["a"]],props:{borderColor:String},data:function(){return{}},render:function(o){return o("div",this.setBorderColor(this.borderColor,{style:{width:"200px",height:"200px",borderStyle:"solid",borderWidth:"10px"}}))}}),Oo={components:{MyComponent:_o},data:function(){return{borderColor:"purple-14"}}},Fo=Oo,Bo=Object(K["a"])(Fo,So,Qo,!1,null,null,null),zo=Bo.exports,To=function(){var o=this,e=o.$createElement,r=o._self._c||e;return r("div",{staticClass:"q-pa-md row justify-around"},[r("my-component",{staticClass:"text-center",attrs:{color:o.color,"bg-color":o.bgColor,"border-color":o.borderColor}},[r("div",{staticClass:"text-h4"},[o._v("Some Text")])])],1)},Po=[],Eo=c["a"].extend({name:"my-component",mixins:[bo["a"]],props:{bgColor:String,borderColor:String},render:function(o){return o("div",this.setBorderColor(this.borderColor,this.setBothColors(this.color,this.bgColor,{style:{width:"200px",height:"200px",borderStyle:"solid",borderWidth:"10px"}})),[this.$slots.default])}}),$o={components:{MyComponent:Eo},data:function(){return{color:"#FFFF00",bgColor:"#FF0000",borderColor:"#00FAFA"}}},Vo=$o,Mo=Object(K["a"])(Vo,To,Po,!1,null,null,null),Do=Mo.exports,Ao=function(){var o=this,e=o.$createElement,r=o._self._c||e;return r("div",{staticClass:"q-pa-md"},[r("div",{staticClass:"q-pb-md q-gutter-md row justify-around"},[r("q-input",{attrs:{filled:""},scopedSlots:o._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"colorize"}},[r("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-color",{model:{value:o.color,callback:function(e){o.color=e},expression:"color"}})],1)],1)]},proxy:!0}]),model:{value:o.color,callback:function(e){o.color=e},expression:"color"}})],1),r("q-separator"),r("div",{staticClass:"q-pa-md row justify-around"},[r("my-component",{attrs:{color:o.color}},[r("div",{staticClass:"text-h4"},[o._v("Some Text")])])],1)],1)},Io=[],No=c["a"].extend({name:"my-component",mixins:[bo["a"]],render:function(o){return o("div",this.setTextColor(this.color,{style:{width:"200px",height:"200px"}}),[this.$slots.default])}}),Lo={components:{MyComponent:No},data:function(){return{color:"#FF0000"}},methods:{selectColor:function(){}}},Wo=Lo,Jo=Object(K["a"])(Wo,Ao,Io,!1,null,null,null),Ro=Jo.exports,Uo=function(){var o=this,e=o.$createElement,r=o._self._c||e;return r("div",{staticClass:"q-pa-md"},[r("div",{staticClass:"q-pb-md q-gutter-md row justify-around"},[r("q-input",{attrs:{filled:""},scopedSlots:o._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"colorize"}},[r("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-color",{model:{value:o.bgColor,callback:function(e){o.bgColor=e},expression:"bgColor"}})],1)],1)]},proxy:!0}]),model:{value:o.bgColor,callback:function(e){o.bgColor=e},expression:"bgColor"}})],1),r("q-separator"),r("div",{staticClass:"q-pa-md row justify-around"},[r("my-component",{attrs:{"bg-color":o.bgColor}},[r("div",{staticClass:"text-h4"},[o._v("Some Text")])])],1)],1)},Ho=[],Ko=c["a"].extend({name:"my-component",mixins:[bo["a"]],props:{bgColor:String},render:function(o){return o("div",this.setBackgroundColor(this.bgColor,{style:{width:"200px",height:"200px"}}))}}),Go={components:{MyComponent:Ko},data:function(){return{bgColor:"#FF0000"}}},Xo=Go,Yo=Object(K["a"])(Xo,Uo,Ho,!1,null,null,null),Zo=Yo.exports,oe=function(){var o=this,e=o.$createElement,r=o._self._c||e;return r("div",{staticClass:"q-pa-md"},[r("div",{staticClass:"q-pb-md q-gutter-md row justify-around"},[r("q-input",{attrs:{filled:""},scopedSlots:o._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"colorize"}},[r("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-color",{model:{value:o.borderColor,callback:function(e){o.borderColor=e},expression:"borderColor"}})],1)],1)]},proxy:!0}]),model:{value:o.borderColor,callback:function(e){o.borderColor=e},expression:"borderColor"}})],1),r("q-separator"),r("div",{staticClass:"q-pa-md row justify-around"},[r("my-component",{attrs:{"border-color":o.borderColor}})],1)],1)},ee=[],re=c["a"].extend({name:"my-component",mixins:[bo["a"]],props:{borderColor:String},render:function(o){return o("div",this.setBorderColor(this.borderColor,{style:{width:"200px",height:"200px",borderStyle:"solid",borderWidth:"10px"}}))}}),te={components:{MyComponent:re},data:function(){return{borderColor:"purple-14"}}},ne=te,ae=Object(K["a"])(ne,oe,ee,!1,null,null,null),le=ae.exports,ie=function(){var o=this,e=o.$createElement,r=o._self._c||e;return r("div",{staticClass:"q-pa-md"},[r("div",{staticClass:"q-pb-md q-gutter-md row justify-around"},[r("q-input",{attrs:{filled:""},scopedSlots:o._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"colorize"}},[r("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-color",{model:{value:o.color,callback:function(e){o.color=e},expression:"color"}})],1)],1)]},proxy:!0}]),model:{value:o.color,callback:function(e){o.color=e},expression:"color"}}),r("q-input",{attrs:{filled:""},scopedSlots:o._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"colorize"}},[r("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-color",{model:{value:o.bgColor,callback:function(e){o.bgColor=e},expression:"bgColor"}})],1)],1)]},proxy:!0}]),model:{value:o.bgColor,callback:function(e){o.bgColor=e},expression:"bgColor"}}),r("q-input",{attrs:{filled:""},scopedSlots:o._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"colorize"}},[r("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-color",{model:{value:o.borderColor,callback:function(e){o.borderColor=e},expression:"borderColor"}})],1)],1)]},proxy:!0}]),model:{value:o.borderColor,callback:function(e){o.borderColor=e},expression:"borderColor"}})],1),r("q-separator"),r("div",{staticClass:"q-pa-md row justify-around"},[r("my-component",{staticClass:"text-center",attrs:{color:o.color,"bg-color":o.bgColor,borderColor:o.borderColor}},[r("div",{staticClass:"text-h4"},[o._v("Some Text")])])],1)],1)},se=[],ce=c["a"].extend({name:"my-component",mixins:[bo["a"]],props:{bgColor:String,borderColor:String},render:function(o){return o("div",this.setBorderColor(this.borderColor,this.setBothColors(this.color,this.bgColor,{style:{width:"200px",height:"200px",borderStyle:"solid",borderWidth:"10px"}})),[this.$slots.default])}}),ue={components:{MyComponent:ce},data:function(){return{color:"#FFFF00",bgColor:"#FF0000",borderColor:"#00FAFA"}}},de=ue,pe=Object(K["a"])(de,ie,se,!1,null,null,null),be=pe.exports,fe=function(o){var e=o.Vue;e.component("ColorizeColor",go),e.component("ColorizeBackground",jo),e.component("ColorizeBorder",zo),e.component("ColorizeBoth",Do),e.component("ColorizeColorSelection",Ro),e.component("ColorizeBackgroundSelection",Zo),e.component("ColorizeBorderSelection",le),e.component("ColorizeBothSelection",be)},me=r("030f"),he=r("2330"),Ce=r("b692"),ge=co(),ye=ge.app,ve=ge.store,xe=ge.router;function we(){return ke.apply(this,arguments)}function ke(){return ke=s()(l.a.mark((function o(){var e,r,t,n,a;return l.a.wrap((function(o){while(1)switch(o.prev=o.next){case 0:e=!0,r=function(o){e=!1,window.location.href=o},t=window.location.href.replace(window.location.origin,""),n=[fe,me["a"],he["a"],Ce["a"]],a=0;case 5:if(!(!0===e&&a<n.length)){o.next=23;break}if("function"===typeof n[a]){o.next=8;break}return o.abrupt("continue",20);case 8:return o.prev=8,o.next=11,n[a]({app:ye,router:xe,store:ve,Vue:c["a"],ssrContext:null,redirect:r,urlPath:t});case 11:o.next=20;break;case 13:if(o.prev=13,o.t0=o["catch"](8),!o.t0||!o.t0.url){o.next=18;break}return window.location.href=o.t0.url,o.abrupt("return");case 18:return console.error("[Quasar] boot error:",o.t0),o.abrupt("return");case 20:a++,o.next=5;break;case 23:if(!1!==e){o.next=25;break}return o.abrupt("return");case 25:new c["a"](ye);case 26:case"end":return o.stop()}}),o,null,[[8,13]])}))),ke.apply(this,arguments)}we()},"384e":function(o,e,r){"use strict";r("7f7f");var t=r("ab0b"),n=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("456d"),r("6b54"),r("06db"),r("c47a")),a=r.n(n);r("f559"),r("4917"),r("6762");function l(o,e){var r=Object.keys(o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(o);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),r.push.apply(r,t)}return r}function i(o){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(r,!0).forEach((function(e){a()(o,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):l(r).forEach((function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(r,e))}))}return o}var s=["transparent","aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],c={name:"QColorizeMixin",props:{color:String},methods:{isNamedCssColor:function(o){return!!o&&s.includes(o.toLowerCase())},isCssColor:function(o){return!!o&&(!!o.match(/^(#|(rgb|hsl)a?\()/)||this.isNamedCssColor(o))},isCssVar:function(o){return!!o&&o.startsWith("--")},calculateColor:function(o){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"black";return void 0===o&&void 0!==e?this.calculateColor(e):this.isCssColor(o)?o:this.makeQuasarColorVar(o,e)},makeQuasarColorVar:function(o,e){var r=this.isCssVar(o)?o:"--q-color-".concat(o);return"var(".concat(r,", '").concat(e,"')")},isValidCssColor:function(o){return this.isCssColor(o)||this.isCssVar(o)},setBothColors:function(o,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.setTextColor(o,this.setBackgroundColor(e,r))},setBackgroundColor:function(o){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.isValidCssColor(o)){var r=this.calculateColor(o);void 0===e.style&&(e.style={}),e.style=i({},e.style,{"background-color":"".concat(r)})}else if(o){var t=o.toString().trim();void 0===e.class&&(e.class={}),e.class=i({},e.class,a()({},"bg-"+t,!0))}return e},setTextColor:function(o){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.isValidCssColor(o)){var r=this.calculateColor(o);void 0===e.style&&(e.style={}),e.style=i({},e.style,{color:"".concat(r),"caret-color":"".concat(r)})}else if(o){var t=o.toString().trim();void 0===e.class&&(e.class={}),e.class=i({},e.class,a()({},"text-"+t,!0))}return e},setBorderColor:function(o){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.isValidCssColor(o)){var r=this.calculateColor(o);void 0===e.style&&(e.style={}),e.style=i({},e.style,{"border-color":"".concat(r)})}else if(o){var t=o.toString().trim();void 0===e.class&&(e.class={}),e.class=i({},e.class,a()({},"border-"+t,!0))}return e}}};r.d(e,"a",(function(){return c})),c.version=t["a"];t["a"]},ab0b:function(o){o.exports=JSON.parse('{"a":"1.0.0"}')},cd50:function(o,e,r){var t={"./bmp":"0dcc","./bmp.js":"0dcc","./gif":"c416","./gif.js":"c416","./jpg":"135b","./jpg.js":"135b","./png":"e9ef","./png.js":"e9ef","./psd":"520c","./psd.js":"520c","./svg":"b0bf","./svg.js":"b0bf","./tiff":"f270","./tiff.js":"f270","./webp":"cf1e","./webp.js":"cf1e"};function n(o){var e=a(o);return r(e)}function a(o){if(!r.o(t,o)){var e=new Error("Cannot find module '"+o+"'");throw e.code="MODULE_NOT_FOUND",e}return t[o]}n.keys=function(){return Object.keys(t)},n.resolve=a,o.exports=n,n.id="cd50"},e3dd:function(o,e,r){}},[[0,"runtime","vendor"]]]);