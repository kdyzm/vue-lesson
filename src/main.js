import Vue from 'vue';
import App from './App.vue';

import VueResource from 'vue-resource';
import VueRouter from 'vue-router'

//https://router.vuejs.org/zh/guide/#html 简单路由的配置
//1.定义组件
import Home from './components/Home';
import News from './components/News';

Vue.use(VueResource);
Vue.use(VueRouter);

//2.定义路由
const routes = [
    { path: '/home', component: Home },
    { path: '/news', component: News },
    { path: '*', redirect: '/home' }
]

//3.创建router实例，传routes配置
const router=new VueRouter({
    routes
})

//4.挂载到根实例
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

//5.在App.vue中使用<router-view></router-view>
