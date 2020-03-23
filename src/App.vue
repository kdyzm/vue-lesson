<template>
  <div id="app">
    <h2>{{msg}}</h2>
    这是一个根组件
    <br/>
    绑定对象：{{obj.name}}
    <br/>
    <ul>
      <li v-for="(item,key) in list" :key="item" :class="{'red':key == 0}">
       {{key}} --- {{item}}
      </li>
    </ul>
    <br/>
    使用v-bind绑定属性：<div v-bind:title="title">鼠标瞄一下看到title</div>
    可以使用：简写绑定：<div :title="title">简写的绑定写法</div>
    <br/>
    <div v-html="html"></div>
    <br/>
    使用v-bind:class绑定样式：
    <div v-bind:style="{'width':boxwith+'px'}" v-bind:class="{'box':flag}">样式绑定</div>
    <hr/>
    <input v-model="inputData"/><button v-on:click="getMsg()">获取数据</button>
    <hr/>
    <input ref="inputData1"/><button v-on:click="getMsg1()">获取数据1</button>
  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      obj:{
        name: '张三'
      },
      list:[
        "1111",
        "2222",
        "3333"
      ],
      title: "我是一个title",
      html: "<h2>我是一个html</h2>",
      flag: true,
      boxwith:100,
      inputData: "Hello"
    }
  },
  methods:{
    getMsg(){
      alert(this.inputData);
    },
    getMsg1(){
      alert(this.$refs.inputData1.value);
    }
  }
}
</script>

<style>
  .red{
    color: red;
  }

  .box{
    height: 200px;
    width: 100px;
    background-color: red;
  }
</style>
