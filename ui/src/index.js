import { version } from '../package.json'
import QColorizeMixin from './component/Component'

QColorizeMixin.version = version

export {
  QColorizeMixin
}

export default {
  QColorizeMixin,
  version,

  install (Vue) {
    Vue.component(QColorizeMixin.name, QColorizeMixin)
  }
}
