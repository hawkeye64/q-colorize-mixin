<template>
  <div class="q-pa-md row justify-around">
    <my-component
      :border-color="borderColor"
    />
  </div>
</template>

<script>
import Vue from 'vue'
// normally, use
// import { QColorizeMixin } from 'q-colorize-mixin'
import { QColorizeMixin } from 'ui'

const MyComponent = Vue.extend({
  name: 'my-component',

  mixins: [QColorizeMixin],

  props: {
    borderColor: String
  },

  data () {
    return {
    }
  },

  render (h) {
    return h('div', this.setBorderColor(this.borderColor, {
      style: {
        width: '200px',
        height: '200px',
        borderStyle: 'solid',
        borderWidth: '10px'
      }
    }))
  }
})

export default {
  components: {
    MyComponent
  },

  data () {
    return {
      borderColor: 'purple-14'
    }
  }
}
</script>
