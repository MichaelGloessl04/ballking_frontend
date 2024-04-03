import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import uk from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
uk.use(Icons)

const app = createApp(App)

app.use(router)

app.mount('#app')
