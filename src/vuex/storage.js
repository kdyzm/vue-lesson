import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

/**
 * state在vuex中用于存储数据
 * @type {{count: number}}
 */
var state = {
    count: 1
}

/**
 * mutatoin中主要用于存放方法，主要用于改编state中的数据
 * @type {{}}
 */
var mutation = {
    incCount() {
        state.count++;
    }
}

/**
 * 有点类似于计算属性，改编state里面的值得时候回触发getters里面的方法，获取新的值
 */
var getters = {
    computed: (state) => {
        return state.count * 2;
    }
}

var action={

}

const store = new Vuex.Store({
    state: state,
    mutations: mutation,
    getters: getters
});

export default store;






