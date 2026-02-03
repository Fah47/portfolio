import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/style.css' // เชื่อมต่อสไตล์และสี #fc5571

import App from './App.vue'
import router from './router' // เชื่อมต่อระบบเปลี่ยนหน้า Index, About, Extra

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')