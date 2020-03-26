import Vue from 'vue';
import VueRouter from 'vue-router'

//1.定义组件
import Home from '../components/Home';
import News from '../components/News';
import NewsDetail from '../components/NewsDetail';
import User from '../components/User';
import UserAdd from '../components/user/UserAdd';
import UserList from '../components/user/UserList';

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

export default router;

