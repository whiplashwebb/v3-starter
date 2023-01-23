import { createPinia } from 'pinia';
import { createApp } from 'vue';

// Bundle must come before app to ensure the correct order
import '@whiplashmerch/design-system/dist/style.css';
import App from './App.vue';
import { addDesignSystem, addFontawesome, addOruga } from './plugins';
import router from './router/router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(addOruga);
app.use(addFontawesome);
app.use(addDesignSystem);

app.mount('#app');
