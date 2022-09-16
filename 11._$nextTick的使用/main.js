/* 
    总结：
        1.语法： this.$nextTick(回调函数)
        2.在下一次DOM更新结束后执行其指定的回调函数
        3.什么时候用，当改变数据后，vue完成虚拟dom解析，并插入到页面中后，执行nextTick中的回调函数
*/

// 引入vue
import Vue from 'vue'

// 引入App
import App from './App.vue'

// 引入插件

Vue.config.productionTip = false;


new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    }
})