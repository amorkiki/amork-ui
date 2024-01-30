import Select from './Select.vue'
import Option from './Option.vue'

Select.install = function (app) {
  app.component(Select.name, Select)
}
Option.install = function (app) {
  app.component(Option.name, Option)
}

export { Select, Option} 