<template>
    <div id="app">
        <router-link to="/home">首页</router-link>
        <router-link to="/news">新闻</router-link>
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
    </div>
</template>

<script>

    import DataBind from './components/DataBind';
    import Home from './components/Home';
    import LifeCycle from './components/LifeCycle';
    import News from './components/News';

    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            'v-databind': DataBind,
            'v-home': Home,
            'v-lifecycle': LifeCycle,
            'v-news': News
        }
    }
</script>

<style>

</style>
