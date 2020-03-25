<template>
    <div>
        <v-header ref="header" :title="title"/>
        <br/>
        <button @click="getHeaderData()">获取子组件的数据和方法</button>
        <br/><br/>
        <button @click="emitNews()">给News组件传值</button>
        <br/><br/>
        <button @click="jump2News()">通过js跳转到新闻页面</button>
        <br/><br/>
        <button @click="getData()">请求数据</button>
        <ul>
            <li v-for="(item,key) in list.data" :key="key">
                {{item}}
            </li>
        </ul>

    </div>
</template>

<script>

    import Header from './common/Header';
    import VueEvent from './model/VueEvent';

    export default {
        name: "Home",
        data() {
            return {
                title: "我是Home组件",
                list: []
            }
        }, methods: {
            getData() {
                var url = "http://rap2.taobao.org:38080/app/mock/246551/react-demo/news-list";
                this.$http.get(url).then((res) => {
                    console.log(res.data);
                    this.list = res.data;
                }, (err) => {
                    console.log(err);
                })
            },
            getHeaderData() {
                this.$refs.header.run();
            },
            emitNews() {
                VueEvent.$emit('to-news', this.title);
            },
            jump2News() {
                //注意，这里的官方文档写错了
                this.$router.push({path: "/news"});

            }
        },
        components: {
            'v-header': Header
        }
    }
</script>

<style scoped>

</style>
