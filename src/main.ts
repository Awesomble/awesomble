import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { key, store } from '@/store'
import { createGtm } from 'vue-gtm'

const app = createApp(App)

app.use(
    createGtm({
        id: 'GTM-W2D3MXC'
    })
)

// @ts-ignore
createApp(App).use(router).use(store, key).mount('#app')
