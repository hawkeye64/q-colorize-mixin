(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(o,t,r){o.exports=r("2f39")},"018e":function(o,t){},"2f39":function(o,t,r){"use strict";r.r(t);var e={};r.r(e),r.d(e,"toc",(function(){return oo}));var n={};r.r(n),r.d(n,"toc",(function(){return to}));var a=r("967e"),l=r.n(a),s=(r("a481"),r("96cf"),r("fa84")),i=r.n(s),c=(r("7d6e"),r("e54f"),r("62f2"),r("7e6d"),r("2913"),r("b7f2"),r("5503"),r("e191"),r("d5b2"),r("2cd3"),r("0336"),r("2b0e")),u=r("b05d"),d=r("9c40"),p=r("f09f"),f=r("8f8e"),b=r("b498"),m=r("f2cc"),C=r("54b4"),h=r("9898"),x=r("0016"),v=r("27f9"),y=r("6ab5"),g=r("e208"),w=r("033f"),q=r("3845"),k=r("4d5a"),S=r("497d"),j=r("2ea3"),Q=r("c7a0"),_=r("5096"),F=r("7cbe"),z=r("3786"),B=r("4983"),T=r("ddd8"),$=r("eb85"),O=r("7460"),E=r("823b"),M=r("adad"),P=r("429b"),A=r("9564"),I=r("65c6"),L=r("6ac5"),V=r("714f"),W=r("4396"),D=r("2a19"),N=r("0967");c["a"].use(u["a"],{config:{},components:{QBtn:d["a"],QCard:p["a"],QCheckbox:f["a"],QColor:b["a"],QDrawer:m["a"],QExpansionItem:C["a"],QHeader:h["a"],QIcon:x["a"],QInput:v["a"],QItem:y["a"],QItemLabel:g["a"],QItemSection:w["a"],QKnob:q["a"],QLayout:k["a"],QList:S["a"],QPage:j["a"],QPageContainer:Q["a"],QPageScroller:_["a"],QPopupProxy:F["a"],QRadio:z["a"],QScrollArea:B["a"],QSelect:T["a"],QSeparator:$["a"],QTab:O["a"],QTabPanel:E["a"],QTabPanels:M["a"],QTabs:P["a"],QToggle:A["a"],QToolbar:I["a"],QToolbarTitle:L["a"]},directives:{Ripple:V["a"],Scroll:W["a"]},plugins:{Notify:D["a"],Platform:N["a"]}});var J=function(){var o=this,t=o.$createElement,r=o._self._c||t;return r("div",{attrs:{id:"q-app"}},[r("router-view")],1)},R=[],U={name:"App"},H=U,K=r("2877"),G=Object(K["a"])(H,J,R,!1,null,null,null),X=G.exports,Y=r("2f62"),Z={toc:[]},oo=function(o){return o.toc},to=function(o,t){o.toc=t},ro=r("018e"),eo={namespaced:!0,state:Z,getters:e,mutations:n,actions:ro};c["a"].use(Y["a"]);var no=function(){var o=new Y["a"].Store({modules:{common:eo},strict:!1});return o},ao=r("8c4f"),lo=[{path:"/",redirect:"/docs"},{path:"/docs",component:function(){return r.e("2d0d5fdf").then(r.bind(null,"713b"))},children:[{path:"",component:function(){return r.e("26bfabfa").then(r.bind(null,"8b24"))}}]},{path:"/examples",component:function(){return r.e("2d0d5fdf").then(r.bind(null,"713b"))},children:[{path:"",component:function(){return r.e("f06f8e7e").then(r.bind(null,"0960"))}}]}];lo.push({path:"*",component:function(){return r.e("4b47640d").then(r.bind(null,"e51e"))}});var so=lo;c["a"].use(ao["a"]);var io=function(){var o=new ao["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:so,mode:"history",base:"/q-colorize-mixin/"});return o},co=function(){var o="function"===typeof no?no({Vue:c["a"]}):no,t="function"===typeof io?io({Vue:c["a"],store:o}):io;o.$router=t;var r={el:"#q-app",router:t,store:o,render:function(o){return o(X)}};return{app:r,store:o,router:t}},uo=function(){var o=this,t=o.$createElement,r=o._self._c||t;return r("div",{staticClass:"q-pa-md row justify-around"},[r("my-component",{attrs:{color:o.color}},[r("div",{staticClass:"text-h4"},[o._v("Some Text")])])],1)},po=[],fo=r("09d7"),bo=c["a"].extend({name:"my-component",mixins:[fo["a"]],render:function(o){return o("div",this.setTextColor(this.color,{style:{width:"200px",height:"200px"}}),[this.$slots.default])}}),mo={name:"ColorizeColor",components:{MyComponent:bo},data:function(){return{color:"#FF0000"}}},Co=mo,ho=Object(K["a"])(Co,uo,po,!1,null,null,null),xo=ho.exports,vo=function(){var o=this,t=o.$createElement,r=o._self._c||t;return r("div",{staticClass:"q-pa-md row justify-around"},[r("my-component",{attrs:{"bg-color":o.bgColor}})],1)},yo=[],go=c["a"].extend({name:"my-component",mixins:[fo["a"]],props:{bgColor:String},data:function(){return{}},render:function(o){return o("div",this.setBackgroundColor(this.bgColor,{style:{width:"200px",height:"200px"}}))}}),wo={components:{MyComponent:go},data:function(){return{bgColor:"#FF0000"}}},qo=wo,ko=Object(K["a"])(qo,vo,yo,!1,null,null,null),So=ko.exports,jo=function(){var o=this,t=o.$createElement,r=o._self._c||t;return r("div",{staticClass:"q-pa-md row justify-around"},[r("my-component",{attrs:{"border-color":o.borderColor}})],1)},Qo=[],_o=c["a"].extend({name:"my-component",mixins:[fo["a"]],props:{borderColor:String},data:function(){return{}},render:function(o){return o("div",this.setBorderColor(this.borderColor,{style:{width:"200px",height:"200px",borderStyle:"solid",borderWidth:"10px"}}))}}),Fo={components:{MyComponent:_o},data:function(){return{borderColor:"purple-14"}}},zo=Fo,Bo=Object(K["a"])(zo,jo,Qo,!1,null,null,null),To=Bo.exports,$o=function(){var o=this,t=o.$createElement,r=o._self._c||t;return r("div",{staticClass:"q-pa-md row justify-around"},[r("my-component",{staticClass:"text-center",attrs:{color:o.color,"bg-color":o.bgColor,"border-color":o.borderColor}},[r("div",{staticClass:"text-h4"},[o._v("Some Text")])])],1)},Oo=[],Eo=c["a"].extend({name:"my-component",mixins:[fo["a"]],props:{bgColor:String,borderColor:String},render:function(o){return o("div",this.setBorderColor(this.borderColor,this.setBothColors(this.color,this.bgColor,{style:{width:"200px",height:"200px",borderStyle:"solid",borderWidth:"10px"}})),[this.$slots.default])}}),Mo={components:{MyComponent:Eo},data:function(){return{color:"#FFFF00",bgColor:"#FF0000",borderColor:"#00FAFA"}}},Po=Mo,Ao=Object(K["a"])(Po,$o,Oo,!1,null,null,null),Io=Ao.exports,Lo=function(){var o=this,t=o.$createElement,r=o._self._c||t;return r("div",{staticClass:"q-pa-md"},[r("div",{staticClass:"q-pb-md q-gutter-md row justify-around"},[r("q-input",{attrs:{filled:""},scopedSlots:o._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"colorize"}},[r("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-color",{model:{value:o.color,callback:function(t){o.color=t},expression:"color"}})],1)],1)]},proxy:!0}]),model:{value:o.color,callback:function(t){o.color=t},expression:"color"}})],1),r("q-separator"),r("div",{staticClass:"q-pa-md row justify-around"},[r("my-component",{attrs:{color:o.color}},[r("div",{staticClass:"text-h4"},[o._v("Some Text")])])],1)],1)},Vo=[],Wo=c["a"].extend({name:"my-component",mixins:[fo["a"]],render:function(o){return o("div",this.setTextColor(this.color,{style:{width:"200px",height:"200px"}}),[this.$slots.default])}}),Do={components:{MyComponent:Wo},data:function(){return{color:"#FF0000"}},methods:{selectColor:function(){}}},No=Do,Jo=Object(K["a"])(No,Lo,Vo,!1,null,null,null),Ro=Jo.exports,Uo=function(){var o=this,t=o.$createElement,r=o._self._c||t;return r("div",{staticClass:"q-pa-md"},[r("div",{staticClass:"q-pb-md q-gutter-md row justify-around"},[r("q-input",{attrs:{filled:""},scopedSlots:o._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"colorize"}},[r("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-color",{model:{value:o.bgColor,callback:function(t){o.bgColor=t},expression:"bgColor"}})],1)],1)]},proxy:!0}]),model:{value:o.bgColor,callback:function(t){o.bgColor=t},expression:"bgColor"}})],1),r("q-separator"),r("div",{staticClass:"q-pa-md row justify-around"},[r("my-component",{attrs:{"bg-color":o.bgColor}},[r("div",{staticClass:"text-h4"},[o._v("Some Text")])])],1)],1)},Ho=[],Ko=c["a"].extend({name:"my-component",mixins:[fo["a"]],props:{bgColor:String},render:function(o){return o("div",this.setBackgroundColor(this.bgColor,{style:{width:"200px",height:"200px"}}))}}),Go={components:{MyComponent:Ko},data:function(){return{bgColor:"#FF0000"}}},Xo=Go,Yo=Object(K["a"])(Xo,Uo,Ho,!1,null,null,null),Zo=Yo.exports,ot=function(){var o=this,t=o.$createElement,r=o._self._c||t;return r("div",{staticClass:"q-pa-md"},[r("div",{staticClass:"q-pb-md q-gutter-md row justify-around"},[r("q-input",{attrs:{filled:""},scopedSlots:o._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"colorize"}},[r("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-color",{model:{value:o.borderColor,callback:function(t){o.borderColor=t},expression:"borderColor"}})],1)],1)]},proxy:!0}]),model:{value:o.borderColor,callback:function(t){o.borderColor=t},expression:"borderColor"}})],1),r("q-separator"),r("div",{staticClass:"q-pa-md row justify-around"},[r("my-component",{attrs:{"border-color":o.borderColor}})],1)],1)},tt=[],rt=c["a"].extend({name:"my-component",mixins:[fo["a"]],props:{borderColor:String},render:function(o){return o("div",this.setBorderColor(this.borderColor,{style:{width:"200px",height:"200px",borderStyle:"solid",borderWidth:"10px"}}))}}),et={components:{MyComponent:rt},data:function(){return{borderColor:"purple-14"}}},nt=et,at=Object(K["a"])(nt,ot,tt,!1,null,null,null),lt=at.exports,st=function(){var o=this,t=o.$createElement,r=o._self._c||t;return r("div",{staticClass:"q-pa-md"},[r("div",{staticClass:"q-pb-md q-gutter-md row justify-around"},[r("q-input",{attrs:{filled:""},scopedSlots:o._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"colorize"}},[r("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-color",{model:{value:o.color,callback:function(t){o.color=t},expression:"color"}})],1)],1)]},proxy:!0}]),model:{value:o.color,callback:function(t){o.color=t},expression:"color"}}),r("q-input",{attrs:{filled:""},scopedSlots:o._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"colorize"}},[r("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-color",{model:{value:o.bgColor,callback:function(t){o.bgColor=t},expression:"bgColor"}})],1)],1)]},proxy:!0}]),model:{value:o.bgColor,callback:function(t){o.bgColor=t},expression:"bgColor"}}),r("q-input",{attrs:{filled:""},scopedSlots:o._u([{key:"append",fn:function(){return[r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"colorize"}},[r("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[r("q-color",{model:{value:o.borderColor,callback:function(t){o.borderColor=t},expression:"borderColor"}})],1)],1)]},proxy:!0}]),model:{value:o.borderColor,callback:function(t){o.borderColor=t},expression:"borderColor"}})],1),r("q-separator"),r("div",{staticClass:"q-pa-md row justify-around"},[r("my-component",{staticClass:"text-center",attrs:{color:o.color,"bg-color":o.bgColor,borderColor:o.borderColor}},[r("div",{staticClass:"text-h4"},[o._v("Some Text")])])],1)],1)},it=[],ct=c["a"].extend({name:"my-component",mixins:[fo["a"]],props:{bgColor:String,borderColor:String},render:function(o){return o("div",this.setBorderColor(this.borderColor,this.setBothColors(this.color,this.bgColor,{style:{width:"200px",height:"200px",borderStyle:"solid",borderWidth:"10px"}})),[this.$slots.default])}}),ut={components:{MyComponent:ct},data:function(){return{color:"#FFFF00",bgColor:"#FF0000",borderColor:"#00FAFA"}}},dt=ut,pt=Object(K["a"])(dt,st,it,!1,null,null,null),ft=pt.exports,bt=function(o){var t=o.Vue;t.component("ColorizeColor",xo),t.component("ColorizeBackground",So),t.component("ColorizeBorder",To),t.component("ColorizeBoth",Io),t.component("ColorizeColorSelection",Ro),t.component("ColorizeBackgroundSelection",Zo),t.component("ColorizeBorderSelection",lt),t.component("ColorizeBothSelection",ft)},mt=r("030f"),Ct=r("2330"),ht=r("b692"),xt=r("c4cf"),vt=r("ba0a"),yt=co(),gt=yt.app,wt=yt.store,qt=yt.router;function kt(){return St.apply(this,arguments)}function St(){return St=i()(l.a.mark((function o(){var t,r,e,n,a;return l.a.wrap((function(o){while(1)switch(o.prev=o.next){case 0:t=!0,r=function(o){t=!1,window.location.href=o},e=window.location.href.replace(window.location.origin,""),n=[bt,mt["a"],Ct["a"],ht["a"],xt["a"],vt["a"]],a=0;case 5:if(!(!0===t&&a<n.length)){o.next=23;break}if("function"===typeof n[a]){o.next=8;break}return o.abrupt("continue",20);case 8:return o.prev=8,o.next=11,n[a]({app:gt,router:qt,store:wt,Vue:c["a"],ssrContext:null,redirect:r,urlPath:e});case 11:o.next=20;break;case 13:if(o.prev=13,o.t0=o["catch"](8),!o.t0||!o.t0.url){o.next=18;break}return window.location.href=o.t0.url,o.abrupt("return");case 18:return console.error("[Quasar] boot error:",o.t0),o.abrupt("return");case 20:a++,o.next=5;break;case 23:if(!1!==t){o.next=25;break}return o.abrupt("return");case 25:new c["a"](gt);case 26:case"end":return o.stop()}}),o,null,[[8,13]])}))),St.apply(this,arguments)}kt()},"7e6d":function(o,t,r){},cd50:function(o,t,r){var e={"./bmp":"0dcc","./bmp.js":"0dcc","./gif":"c416","./gif.js":"c416","./jpg":"135b","./jpg.js":"135b","./png":"e9ef","./png.js":"e9ef","./psd":"520c","./psd.js":"520c","./svg":"b0bf","./svg.js":"b0bf","./tiff":"f270","./tiff.js":"f270","./webp":"cf1e","./webp.js":"cf1e"};function n(o){var t=a(o);return r(t)}function a(o){if(!r.o(e,o)){var t=new Error("Cannot find module '"+o+"'");throw t.code="MODULE_NOT_FOUND",t}return e[o]}n.keys=function(){return Object.keys(e)},n.resolve=a,o.exports=n,n.id="cd50"}},[[0,"runtime","vendor"]]]);