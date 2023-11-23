import { createApp } from 'vue'
import './sass/_global.sass'
import './sass/_variavel.sass'
import './sass/_mixin.sass'
import App from './App.vue';
import {library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import store from './store'
import { Icon } from "@iconify/vue";


library.add(fas);
library.add(fab);
// dom.watch()


createApp(App).use(store).component("font-awesome-icon",Icon, FontAwesomeIcon).mount("#app");


