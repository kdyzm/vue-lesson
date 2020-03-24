<template>
    <div>
        <h2>{{title}}</h2>
        {{receiveNews}}
        <ul>
            <li v-for="(item,key) in newsList">

                <router-link :to="'/news/detail/'+item.id">{{item.msg}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>

    import VueEvent from './model/VueEvent';

    export default {
        name: "News",
        data() {
            return {
                title: "我是一个新闻组件",
                receiveNews: "",
                newsList:[
                    {
                        id: 111,
                        msg: "adsfadsfa"
                    },
                    {
                        id: 222,
                        msg: "asfasdfadsf"
                    },
                    {
                        id: 333,
                        msg: "adsadfsadsfadf"
                    }
                ]
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
