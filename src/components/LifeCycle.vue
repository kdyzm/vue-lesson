<template>
    <div>
        <h2>{{title}}</h2>
        <button @click="setMsg()">修改数据</button>
    </div>
</template>

<script>
    export default {
        name: "LifeCycle",
        data() {
            return {
                title: "生命周期函数演示"
            }
        },
        methods: {
            setMsg() {
                this.title = "我是改变后的数据";
            }
        },
        beforeCreate() {
            console.log("示例创建之前")
        },
        created() {
            console.log("示例创建完成")
        },
        beforeMount() {
            console.log("模板编译之前")
        },
        mounted() {
            console.log("模板编译完成")
        },
        beforeUpdate() {
            console.log("数据更新之前")
        },
        updated() {
            console.log("数据更新完成")
        },
        beforeDestroy() {
            console.log("实例销毁之前")
        },
        destroyed() {
            console.log("实例销毁完成");
        }

    }
</script>

<style scoped>

</style>
