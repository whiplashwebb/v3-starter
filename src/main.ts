import { createPinia } from 'pinia';
import { createApp } from 'vue';

// Bundle must come before app to ensure the correct order
import './global-styles/global-bundle.scss';
import App from './App.vue';
import { addFontawesome, addOruga } from './plugins';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(addOruga);
app.use(addFontawesome);

app.mount('#app');
