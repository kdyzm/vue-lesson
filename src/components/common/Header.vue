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

        },
        props:['title']
    }
</script>

<style scoped>

</style>
