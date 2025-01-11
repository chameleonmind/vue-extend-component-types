import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.name = 'ChameleonMind'
app.config.globalProperties.someOtherProp = 'Other prop value'
app.config.globalProperties.someBoolean = false
app.config.globalProperties.showProp = 'This is value for a var only in Show component'

app.mount('#app')
