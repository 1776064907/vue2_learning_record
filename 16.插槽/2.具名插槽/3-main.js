/* 
        总结
            1.在该子组件 结构模板内插入 slot标签，并使用name属性起名，可以同时插入多个slot标签
            2.父组件内子组件标签里的元素 插入 slot属性与name属性的值是一致的，这样就会插入到对应的slot插槽中
            3.在template标签中可以使用 v-slot:name属性的值 绑定插槽

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