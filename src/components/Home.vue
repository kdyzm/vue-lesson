<template>
    <div>
        <h2>{{title}}</h2>
        <button @click="getData()">请求数据</button>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                title: "我是Home组件"
            }
        }, methods: {
            getData() {
                var url="http://rap2.taobao.org:38080/app/mock/246551/react-demo/news-list";
                this.$http.get(url).then((res) => {
                    console.log(res.data);
                }, (err) => {
                    console.log(err);
                })
            }
        }
    }
</script>

<style scoped>

</style>
