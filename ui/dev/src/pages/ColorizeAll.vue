<template>
  <div class="q-pa-md row justify-around">
    <my-component
      :color="color"
      :bg-color="bgColor"
      :border-color="borderColor"
      class="text-center"
    >
      <div class="text-h4">Some Text</div>
    </my-component>
  </div>
</template>

<script>
import Vue from 'vue'
import { QColorizeMixin } from 'ui'

const MyComponent = Vue.extend({
  name: 'my-component',

  mixins: [QColorizeMixin],

  props: {
    // color prop is added by colorize mix-in
    // background-color is optional and needs to be added if needed
    bgColor: String,
    borderColor: String
  },

  render (h) {
    return h('div', this.setBorderColor(this.borderColor, this.setBothColors(this.color, this.bgColor, {
      style: {
        width: '200px',
        height: '200px',
        borderStyle: 'solid',
        borderWidth: '10px'
      }
    })), [
      this.$slots.default
    ])
  }
})

export default {
  components: {
    MyComponent
  },

  data () {
    return {
      color: '#FFFF00',
      bgColor: '#FF0000',
      borderColor: '#00FAFA'
    }
  }
}
</script>
