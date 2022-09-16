/* 
    总结：
        1.beforeRouteEnter：通过路由规则，进入该组件时被调用
        2.beforeRouteLeave：通过路由规则，离开该组件时被调用
         
*/

// 导入vue
import Vue from 'vue'

// 导入app.vue
import App from './App.vue'

// 导入vue-router框架
import Vuerouter from 'vue-router'

// 导入路由文件
import route from './router/index'

// 使用Vue-router框架
Vue.use(Vuerouter)
Vue.config.productionTip = false
new Vue({
    el: '#app',
    render: h => h(App),
    // 配置路由器
    router:route
})