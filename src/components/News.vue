<template>
    <div>
        <h2>{{title}}</h2>
        {{receiveNews}}
    </div>
</template>

<script>

    import VueEvent from './model/VueEvent';

    export default {
        name: "News",
        data() {
            return {
                title: "我是一个新闻组件",
                receiveNews: ""
            }
        },
        mounted() {
            VueEvent.$on('to-news', (data) => {
                this.receiveNews = data;
            })
        }
    }
</script>

<style scoped>

</style>
