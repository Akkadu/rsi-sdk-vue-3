import { createApp } from 'vue'
import App from './App.vue'
import AkkaduRsi from '@akkadu/rsi-vue-3'

const app = createApp(App);
app.use(AkkaduRsi);
app.mount("#app");
