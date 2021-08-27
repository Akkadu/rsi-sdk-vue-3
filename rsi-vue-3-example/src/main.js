import { createApp } from 'vue'
import App from './App.vue'
import AkkaduRsi from '/Users/romain/Desktop/Projects/Akkadu/akkadu-vue-3/rsi-vue-3'

const app = createApp(App);
app.use(AkkaduRsi);
app.mount("#app");
