import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import ActionCable from 'actioncable'

// const cable = ActionCable.createConsumer('ws://localhost:3000/cable')

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.provide('cable', cable)

app.mount('#app')
