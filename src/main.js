// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import GlobalComponents from "./index.js"
import App from './app'
import Vue from 'vue';
import '../theme/index.css'
import './assets/index.scss'

import store from './store/store.js'
import qs from 'qs'

Vue.prototype.$qs = qs;

Vue.use(GlobalComponents);

/* eslint-disable no-new */
window.app = new Vue({
    el: '#app',
    template: '<App ref="app"/>',
    components: { App },
    store,
    // router,
});