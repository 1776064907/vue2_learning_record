/* 
    总结：
        1、安装 vue-resource 框架， 并导入到main.js文件中
        2、使用Vue.use(vueResource) ,此时vm身上会 多个$http属性，它的用法与axios一致

*/

// 导入vue
import Vue from 'vue'

// 导入app.vue
import App from './App.vue'

import vueResource from 'vue-resource'

Vue.use(vueResource)

Vue.config.productionTip = false
new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    },
})