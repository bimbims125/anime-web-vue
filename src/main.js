import { createApp, Vue } from 'vue'
import App from './App.vue'
import router from './router'

// import '@/assets/js/jquery.slicknav.js'
// import '@/assets/js/player.js'
// import '@/assets/js/main.js'
// import '@/assets/js/bootstrap.min.js'
// import '@/assets/js/owl.carousel.min.js'
// import '@/assets/js/mixitup.min.js'
// import '@/assets/js/jquery.nice-select.min.js'
// import '@/assets/js/jquery-3.3.1.min.js'

// createApp(App).use(router).mount('#app')
const app = createApp(App)
app.use(router)
app.mount('#app')
