/* 
        总结
            1.安装 npm i vuex@3  vue2只能用 vuex3版本，vue3版本只能用vuex4版本
            2.在根目录下创建一个store文件，并在里面创建一个index.js文件
            3.在index文件中导入 vuex，和 vue
            4.使用 Vue.use(Vuex)
            5.分别创建 actions、mutations、state三个变量，他们的值都是一个空对象
            6.使用 new Vuex.Store({actions,mutations,state}) ,并暴露出去
            7.在main.js文件中 导入 store文件， 并在配置文件中加一个 store属性
            8.注意： Vue.use(Vuex) 必须要写在 new Store()的前面
*/

// 导入vue
import Vue from 'vue'

// 导入app.vue
import App from './App.vue'

// 导入store文件
import store from './store'

Vue.config.productionTip = false
new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    },
    store,
})