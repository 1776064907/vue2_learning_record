/* 
    总结：
         1.activated/deactivated,vue-router独有的生命钩子，用于捕捉路由组件的激活状态
         2.activated 路由组件被激活时触发
         3.deactivated 路由组件失活时触发
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