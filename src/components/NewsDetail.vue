<template>
    <div>
        <h2>{{title}}</h2>
        {{$route.params.aid}}
        {{$route.query.aid}}
    </div>
</template>

<script>
    export default {
        name: "NewsDetail",
        data(){
            return {
                title: "新闻详情"
            }
        },
        mounted() {
            console.log(this.$route.params.aid);
            console.log(this.$route.query.aid);
        }
    }
</script>

<style scoped>

</style>
