<template>
    <div id="app">
        <v-home/>
    </div>
</template>

<script>

    import DataBind from './components/DataBind';
    import Home from './components/Home';
    import LifeCycle from './components/LifeCycle';

    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            'v-databind': DataBind,
            'v-home':Home,
            'v-lifecycle':LifeCycle
        }
    }
</script>

<style>

</style>
