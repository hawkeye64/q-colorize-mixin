import { version } from '../package.json'
import QColorizeMixin from './components/QColorizeMixin'

QColorizeMixin.version = version

export {
  QColorizeMixin,
  version
}

export default {
  QColorizeMixin,
  version,

  install (Vue) {
    Vue.component(QColorizeMixin.name, QColorizeMixin)
  }
}
