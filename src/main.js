import Vue from 'vue';
import App from './App.vue';

import VueResource from 'vue-resource';
import VueRouter from 'vue-router'

//https://router.vuejs.org/zh/guide/#html 简单路由的配置
//1.定义组件
import Home from './components/Home';
import News from './components/News';
import NewsDetail from './components/NewsDetail';
import User from './components/User';
import UserAdd from './components/user/UserAdd';
import UserList from './components/user/UserList';

Vue.use(VueResource);
Vue.use(VueRouter);

//2.定义路由
const routes = [
    {path: '/home', component: Home},
    {path: '/news', component: News},
    {path: '/news/detail/:aid', component: NewsDetail},
    {path: '/news/detail', component: NewsDetail},
    {
        path: '/user',
        component: User,
        children: [
            {
                path: 'add',
                component: UserAdd
            },
            {
                path: 'list',
                component: UserList
            }
        ]
    },
    {path: '*', redirect: '/home'}
]

//3.创建router实例，传routes配置
const router = new VueRouter({
    routes
})

//4.挂载到根实例
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

//5.在App.vue中使用<router-view></router-view>
