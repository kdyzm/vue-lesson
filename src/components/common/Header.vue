<template>
    <div>
        <h2>{{title}}</h2>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return {
                title: "我是一个header组件"
            }
        },
        methods:{
            run(){
                alert("我是header组件的方法");
            }
        },
        props:['title']
    }
</script>

<style scoped>

</style>
