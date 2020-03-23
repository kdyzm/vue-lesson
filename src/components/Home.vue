<template>
    <div>
        <h2>{{title}}</h2>
        <button @click="getData()">请求数据</button>
        <ul>
            <li v-for="(item,key) in list.data" :key="key">
                {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
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
            }
        }
    }
</script>

<style scoped>

</style>
