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

// Vue 3
const useColorizeProps = {
  color: String
}

// Vue 3
function useColorize () {
  function isNamedCssColor (color) {
    return !!color && CSS_COLOR_NAMES.includes(color.toLowerCase())
  }

  function isCssColor (color) {
    return !!color && (!!color.match(/^(#|(rgb|hsl)a?\()/) || isNamedCssColor(color))
  }

  function isCssVar (color) {
    return !!color && color.startsWith('--')
  }

  function calculateColor (color, defaultColor = 'black') {
    return color === void 0 && defaultColor !== void 0 // safety net
      ? calculateColor(defaultColor)
      : isCssColor(color)
        ? color
        : makeQuasarColorVar(color, defaultColor)
  }

  function makeQuasarColorVar (color, defaultColor) {
    const varStr = isCssVar(color)
      ? color
      : `--q-color-${color}`

    // return as a css string, ex: "var(--my-color, 'defaultColor')"
    return `var(${varStr}, '${defaultColor}')`
  }

  function isValidCssColor (color) {
    return isCssColor(color) || isCssVar(color)
  }

  function setBothColors (color, bgColor, data = {}) {
    return setTextColor(color, setBackgroundColor(bgColor, data))
  }

  function setBackgroundColor (color, data = {}) {
    if (isValidCssColor(color)) {
      const calcColor = calculateColor(color)
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
  }

  function setTextColor (color, data = {}) {
    if (isValidCssColor(color)) {
      const calcColor = calculateColor(color)
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
  }

  function setBorderColor (color, data = {}) {
    if (isValidCssColor(color)) {
      const calcColor = calculateColor(color)
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

  return {
    isNamedCssColor,
    isCssColor,
    isCssVar,
    calculateColor,
    makeQuasarColorVar,
    isValidCssColor,
    setBothColors,
    setBackgroundColor,
    setTextColor,
    setBorderColor
  }
}

const methods = useColorize()

// Vue 2 compatible
export default {
  name: 'QColorizeMixin',

  props: {
    ...useColorizeProps
  },

  methods
}

export {
  useColorizeProps,
  useColorize
}
