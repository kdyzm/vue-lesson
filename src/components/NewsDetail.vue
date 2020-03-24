<template>
    <div>
        <h2>{{title}}</h2>
        {{$route.params.aid}}
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
            console.log(this.$route.params.aid)
        }
    }
</script>

<style scoped>

</style>
