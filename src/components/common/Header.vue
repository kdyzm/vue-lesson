<template>
    <div>
        <h2>{{title}}</h2>
        <button @click="getParentData()">获取父组件的数据和方法</button>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data(){
            return {
            }
        },
        methods:{
            run(){
                alert("我是header组件的方法");
            },
            getParentData(){
                alert(this.$parent.title);
            }
        },
        props:['title']
    }
</script>

<style scoped>

</style>
