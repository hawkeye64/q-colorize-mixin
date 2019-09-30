<template>
  <div class="q-pa-md row justify-around">
    <my-component
      :color="color"
    >
      <div class="text-h4">Some Text</div>
    </my-component>
  </div>
</template>

<script>
import Vue from 'vue'
import { QColorizeMixin } from 'q-colorize-mixin'

const MyComponent = Vue.extend({
  name: 'my-component',

  mixins: [QColorizeMixin],

  render (h) {
    return h('div', this.setTextColor(this.color, {
      style: {
        width: '200px',
        height: '200px'
      }
    }), [
      this.$slots.default
    ])
  }
})

export default {
  name: 'ColorizeColor',

  components: {
    MyComponent
  },

  data () {
    return {
      color: '#FF0000'
    }
  }
}
</script>
