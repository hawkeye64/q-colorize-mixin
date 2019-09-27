import Vue from 'vue'

// Utils
import slot from 'quasar/src/utils/slot.js'

// Mixins
import Colorize from '@quasar/quasar-app-extension-colorize/src/colorize'

export default Vue.extend({
  props: {
    // add background color property,
    // 'color' property is already added by mixin
    bgColor: String
  },

  mixins: [
    Colorize
  ],

  data () {
    return {
      userColor: ''
    }
  },

  render (h) {
    return h('div', this.setBothColors(this.color, this.bgColor, {
      staticClass: 'my-static-class-1',
      style: {
        width: '100px',
        height: '100px'
      }
    }), [
      slot(this, 'default')
    ])
  }
})
