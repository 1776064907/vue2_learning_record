/* 
    总结：
         1.使用 <keep-alive>包裹 需要缓存的路由组件，作用是让路由组件保持挂载，不被销毁
         2.可以使用 include 属性 指定需要挂载的组件，它的值是组件名
         3.如果不写include属性，则表示缓存所有被包裹的组件
         4.<keep-alive :include="['News','Message']">  指定缓存多个路由组件

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