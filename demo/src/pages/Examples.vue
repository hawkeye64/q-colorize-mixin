<template>
  <hero>
    <div class="q-markdown">
      <example-title title="Colorize Basic" />
      <example-viewer title="Text" file="ColorizeColor" no-edit :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Background" file="ColorizeBackground" no-edit :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Border" file="ColorizeBorder" no-edit :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Text, Background and Border" file="ColorizeBoth" no-edit :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />

      <example-title title="Colorize Advanced" />
      <q-markdown>
For all examples below that take an input, you can manually enter any valid color as well. Here are some ideas you can try:

| Color | Type |
| --- | --- |
| `purple-7` | Quasar color palette |
| `--q-color-green-5` | Quasar css var color |
| `rgb(255, 128, 27)` | rgb color |
| `hsl(120, 100%, 50%)` | hsl color |
| `coral` | CSS named color |

      </q-markdown>
      <example-viewer title="Text with Input" file="ColorizeColorSelection" no-edit :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Background with Input" file="ColorizeBackgroundSelection" no-edit :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Border with Input" file="ColorizeBorderSelection" no-edit :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />
      <example-viewer title="Text, Background and Border with Input" file="ColorizeBothSelection" no-edit :location-url="locationUrl" :js-paths="jsPaths" :css-paths="cssPaths" />

    </div>
  </hero>
</template>

<script>
import Hero from '../components/Hero'
import ExampleTitle from '../components/ExampleTitle'
import { slugify } from 'assets/page-utils'
import { version } from 'ui'

export default {
  name: 'Examples',

  components: {
    Hero,
    ExampleTitle
  },

  data () {
    return {
      tempToc: [],
      locationUrl: 'https://github.com/hawkeye64/q-colorize-mixin/tree/dev/demo/src/examples/',
      jsPaths: [
        `https://cdn.jsdelivr.net/npm/q-colorize-mixin@${version}/dist/index.umd.min.js`
      ],
      cssPaths: [
        `https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qiconpicker@${version}/dist/index.min.css`,
        'https://fonts.googleapis.com/css?family=Roboto:300,400,500|Material+Icons|Material+Icons+Outlined|Material+Icons+Round|Material+Icons+Sharp',
        'https://cdn.jsdelivr.net/npm/@quasar/extras/fontawesome-v5/fontawesome-v5.css'
      ]
    }
  },

  mounted () {
    this.toc = []
    this.tempToc = []
    this.addToToc('Colorize Basic')
    this.addToToc('Text', 2)
    this.addToToc('Background', 2)
    this.addToToc('Border', 2)
    this.addToToc('Text, Background and Border', 2)
    this.addToToc('Colorize Advanced')
    this.addToToc('Text with Input', 2)
    this.addToToc('Background with Input', 2)
    this.addToToc('Border with Input', 2)
    this.addToToc('Text, Background and Border with Input', 2)

    this.toc = this.tempToc
  },

  computed: {
    toc:
    {
      get () {
        return this.$store.state.common.toc
      },
      set (toc) {
        this.$store.commit('common/toc', toc)
      }
    }
  },

  methods: {
    addToToc (name, level = 1) {
      let n = name
      if (level > 1) {
        n = 'example-' + n
      }
      const slug = slugify(n)
      this.tempToc.push({
        children: [],
        id: slug,
        label: name,
        level: level
      })
    }
  }
}
</script>
