import './assets/main.css'
import './styles/index.scss'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(fas)

import Icon from './components/Icon/Icon.vue'
import Button from './components/Button/Button.vue'
import Switch from './components/Switch/Switch.vue'
import Dialog from './components/Dialog/Dialog.vue'
import Select from './components/Select/Select.vue'
import Option from './components/Select/Option.vue'
import Tooltip from './components/Tooltip/Tooltip.vue'


const app = createApp(App)

app.use(router)

app.component('amor-icon',Icon)
app.component('amor-button',Button)
app.component('amor-switch',Switch)
app.component('amor-dialog',Dialog)
app.component('amor-option',Option)
app.component('amor-select',Select)
app.component('amor-tooltip',Tooltip)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
