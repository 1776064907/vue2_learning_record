/* 
    总结：
        1.在子组件 slot标签中传入数据，可以传入多个数据  :games=games
        2.父组件在该子组件标签内，创建template标签，并使用scope来接收子组件传递的数据它是一个对象，可以使用解构赋值来接收数据 scope="allGames"  scope={games}
        3.slot-scope与scope是一样的作用

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