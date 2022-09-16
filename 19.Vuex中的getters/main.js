/* 
        总结
           1.当state中的数据需要加工再使用时，可以使用getters加工
           2.在store.js文件中配置一个 getters对象，它所有管理的函数形参都是 state， 返回值是加工后的值
           3.vue中读取加工后的值， $store.getters.bigSum
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