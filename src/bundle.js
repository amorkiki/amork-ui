//this is the entry file

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(fas)

//style file
import './styles/index.scss'

//components
import Icon from './components/Icon'
import Button from './components/Button'
import Switch from './components/Switch'
import Dialog from './components/Dialog'
import {Select,Option} from './components/Select'
import Tooltip from './components/Tooltip'


const componetsArray = [Icon, Button, Switch, Dialog, Select, Option, Tooltip]

const install = (app) => {
  componetsArray.forEach((component) => {
    app.component(component.name,component)
  })
  //font-awsome
  app.component('font-awesome-icon', FontAwesomeIcon)
} 

//export components
export default { install }

export {install,Icon, Button, Switch, Dialog, Select, Option, Tooltip}