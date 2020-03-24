<template>
    <div id="app">
        <v-home/>
        <hr/>
        <v-news/>
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
