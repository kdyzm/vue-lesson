<template>
    <div id="app">
        <h2>{{msg}}</h2>
        这是一个根组件
        <v-databind/>
        <v-home/>
    </div>
</template>

<script>

    import DataBind from './components/DataBind';
    import Home from './components/Home';

    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            'v-databind': DataBind,
            'v-home':Home
        }
    }
</script>

<style>

</style>
