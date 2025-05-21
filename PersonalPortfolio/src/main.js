import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Importação do Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Importação do Bootstrap-Vue
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// Importação das variáveis CSS personalizadas
import './assets/css/variables.css'
// Importação dos estilos globais
import './assets/css/global.css'

const app = createApp(App)

app.use(router)
app.use(BootstrapVue3)

app.mount('#app')
