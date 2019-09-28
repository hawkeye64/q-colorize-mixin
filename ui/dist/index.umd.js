/*!
 * q-colorize-mixin v1.0.0-alpha.2
 * (c) 2019 Jeff Galbraith <jeff@quasar.dev>
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = global || self, factory(global.QColorizeMixin = {}, global.Vue));
}(this, function (exports, Vue) { 'use strict';

  if (Vue === void 0) {
    console.error('[ Quasar ] Vue is required to run. Please add a script tag for it before loading Quasar.')
    return
  }
  Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;

  var version = "1.0.0-alpha.2";

  // 'transparent' at beginning of array as it's not really a color,
  // but needs to be recognized as well
  var CSS_COLOR_NAMES = [
    'transparent', 'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure',
    'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown',
    'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue',
    'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod',
    'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen',
    'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue',
    'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink',
    'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite',
    'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray',
    'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo',
    'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon',
    'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray',
    'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue',
    'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen',
    'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid',
    'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen',
    'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose',
    'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange',
    'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred',
    'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'red',
    'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell',
    'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow',
    'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet',
    'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'
  ];

  var QColorizeMixin = {
    name: 'QColorizeMixin',

    props: {
      color: String
    },

    methods: {
      isNamedCssColor: function isNamedCssColor (color) {
        return !!color && CSS_COLOR_NAMES.includes(color.toLowerCase())
      },

      isCssColor: function isCssColor (color) {
        return !!color && (!!color.match(/^(#|(rgb|hsl)a?\()/) || this.isNamedCssColor(color))
      },

      isCssVar: function isCssVar (color) {
        return !!color && color.startsWith('--')
      },

      calculateColor: function calculateColor (color, defaultColor) {
        if ( defaultColor === void 0 ) defaultColor = 'black';

        return color === void 0 && defaultColor !== void 0 // safety net
          ? this.calculateColor(defaultColor)
          : this.isCssColor(color)
            ? color
            : this.makeQuasarColorVar(color, defaultColor)
      },

      makeQuasarColorVar: function makeQuasarColorVar (color, defaultColor) {
        var varStr = this.isCssVar(color)
          ? color
          : ("--q-color-" + color);

        // return as a css string, ex: "var(--my-color, 'defaultColor')"
        return ("var(" + varStr + ", '" + defaultColor + "')")
      },

      isValidCssColor: function isValidCssColor (color) {
        return this.isCssColor(color) || this.isCssVar(color)
      },

      setBothColors: function setBothColors (color, bgColor, data) {
        if ( data === void 0 ) data = {};

        return this.setTextColor(color, this.setBackgroundColor(bgColor, data))
      },

      setBackgroundColor: function setBackgroundColor (color, data) {
        var obj;

        if ( data === void 0 ) data = {};
        if (this.isValidCssColor(color)) {
          var calcColor = this.calculateColor(color);
          if (data.style === void 0) { data.style = {}; }
          data.style = Object.assign({}, data.style,
            {'background-color': ("" + calcColor)});
        } else if (color) {
          var colorName = color.toString().trim();
          if (data.class === void 0) { data.class = {}; }
          data.class = Object.assign({}, data.class,
            ( obj = {}, obj['bg-' + colorName] = true, obj ));
        }

        return data
      },

      setTextColor: function setTextColor (color, data) {
        var obj;

        if ( data === void 0 ) data = {};
        if (this.isValidCssColor(color)) {
          var calcColor = this.calculateColor(color);
          if (data.style === void 0) { data.style = {}; }
          data.style = Object.assign({}, data.style,
            {'color': ("" + calcColor),
            'caret-color': ("" + calcColor)});
        } else if (color) {
          var colorName = color.toString().trim();
          if (data.class === void 0) { data.class = {}; }
          data.class = Object.assign({}, data.class,
            ( obj = {}, obj['text-' + colorName] = true, obj ));
        }
        return data
      },

      setBorderColor: function setBorderColor (color, data) {
        var obj;

        if ( data === void 0 ) data = {};
        if (this.isValidCssColor(color)) {
          var calcColor = this.calculateColor(color);
          if (data.style === void 0) { data.style = {}; }
          data.style = Object.assign({}, data.style,
            {'border-color': ("" + calcColor)});
        } else if (color) {
          var colorName = color.toString().trim();
          if (data.class === void 0) { data.class = {}; }
          data.class = Object.assign({}, data.class,
            ( obj = {}, obj['border-' + colorName] = true, obj ));
        }
        return data
      }
    }
  };

  QColorizeMixin.version = version;

  Vue.use(QColorizeMixin);

  exports.QColorizeMixin = QColorizeMixin;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
