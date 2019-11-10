import 'sass'

import ColorizeColor from '../examples/ColorizeColor'
import ColorizeBackground from '../examples/ColorizeBackground'
import ColorizeBorder from '../examples/ColorizeBorder'
import ColorizeBoth from '../examples/ColorizeBoth'
import ColorizeColorSelection from '../examples/ColorizeColorSelection'
import ColorizeBackgroundSelection from '../examples/ColorizeBackgroundSelection'
import ColorizeBorderSelection from '../examples/ColorizeBorderSelection'
import ColorizeBothSelection from '../examples/ColorizeBothSelection'

export default ({ Vue }) => {
  Vue.component('ColorizeColor', ColorizeColor)
  Vue.component('ColorizeBackground', ColorizeBackground)
  Vue.component('ColorizeBorder', ColorizeBorder)
  Vue.component('ColorizeBoth', ColorizeBoth)
  Vue.component('ColorizeColorSelection', ColorizeColorSelection)
  Vue.component('ColorizeBackgroundSelection', ColorizeBackgroundSelection)
  Vue.component('ColorizeBorderSelection', ColorizeBorderSelection)
  Vue.component('ColorizeBothSelection', ColorizeBothSelection)
}
