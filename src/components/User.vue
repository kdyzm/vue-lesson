<template>
    <div class="user">
        <div class="left">
            <ul>
                <li><router-link to="/user/add">用户列表</router-link></li>
                <li><router-link to="/user/list">用户添加</router-link></li>
            </ul>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "User",
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
    .user{
        display: flex;
        .left{
            width: 200px;
            min-height: 400px;
            border-right: 1px solid #eee;
            li{

            }
        }
        .right{
            flex: 1;
        }
    }
</style>
