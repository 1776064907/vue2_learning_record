/* 
    总结：
        1.在子组件vue模板内插入一个 slot标签
        2.父组件在该子组件标签内 创建 结构
*/

// 导入vue
import Vue from 'vue'

// 导入app.vue
import App from './App.vue'


Vue.config.productionTip = false
new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    },
})