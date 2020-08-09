// 'transparent' at beginning of array as it's not really a color,
// but needs to be recognized as well
export const CSS_COLOR_NAMES = [
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
]

export default {
  name: 'QColorizeMixin',

  props: {
    color: String
  },

  methods: {
    isNamedCssColor (color) {
      return !!color && CSS_COLOR_NAMES.includes(color.toLowerCase())
    },

    isCssColor (color) {
      return !!color && (!!color.match(/^(#|(rgb|hsl)a?\()/) || this.isNamedCssColor(color))
    },

    isCssVar (color) {
      return !!color && color.startsWith('--')
    },

    calculateColor (color, defaultColor = 'black') {
      return color === void 0 && defaultColor !== void 0 // safety net
        ? this.calculateColor(defaultColor)
        : this.isCssColor(color)
          ? color
          : this.makeQuasarColorVar(color, defaultColor)
    },

    makeQuasarColorVar (color, defaultColor) {
      const varStr = this.isCssVar(color)
        ? color
        : `--q-color-${color}`

      // return as a css string, ex: "var(--my-color, 'defaultColor')"
      return `var(${varStr}, '${defaultColor}')`
    },

    isValidCssColor (color) {
      return this.isCssColor(color) || this.isCssVar(color)
    },

    setBothColors (color, bgColor, data = {}) {
      return this.setTextColor(color, this.setBackgroundColor(bgColor, data))
    },

    setBackgroundColor (color, data = {}) {
      if (this.isValidCssColor(color)) {
        const calcColor = this.calculateColor(color)
        if (data.style === void 0) data.style = {}
        data.style = {
          ...data.style,
          'background-color': `${calcColor}`
        }
      }
      else if (color) {
        const colorName = color.toString().trim()
        if (data.class === void 0) data.class = {}
        data.class = {
          ...data.class,
          ['bg-' + colorName]: true
        }
      }

      return data
    },

    setTextColor (color, data = {}) {
      if (this.isValidCssColor(color)) {
        const calcColor = this.calculateColor(color)
        if (data.style === void 0) data.style = {}
        data.style = {
          ...data.style,
          color: `${calcColor}`,
          'caret-color': `${calcColor}`
        }
      }
      else if (color) {
        const colorName = color.toString().trim()
        if (data.class === void 0) data.class = {}
        data.class = {
          ...data.class,
          ['text-' + colorName]: true
        }
      }
      return data
    },

    setBorderColor (color, data = {}) {
      if (this.isValidCssColor(color)) {
        const calcColor = this.calculateColor(color)
        if (data.style === void 0) data.style = {}
        data.style = {
          ...data.style,
          'border-color': `${calcColor}`
        }
      }
      else if (color) {
        const colorName = color.toString().trim()
        if (data.class === void 0) data.class = {}
        data.class = {
          ...data.class,
          ['border-color-' + colorName]: true
        }
      }
      return data
    }
  }
}
