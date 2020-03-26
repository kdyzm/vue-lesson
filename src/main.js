import Vue from 'vue';
import App from './App.vue';

import VueResource from 'vue-resource';
import router from './router/router';

//https://router.vuejs.org/zh/guide/#html 简单路由的配置

Vue.use(VueResource);

//4.挂载到根实例
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

//5.在App.vue中使用<router-view></router-view>
