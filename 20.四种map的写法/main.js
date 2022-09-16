/* 
        总结
           1.从 vuex 中导入 mapState，mapGetters
           2.在计算属性中 借助 mapState，mapGetters生成计算属性，
           3.它们有两种写法第一种 ...mapState({属性名,获取的state中的数据}) ...mapState(['state中的属性名'])
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