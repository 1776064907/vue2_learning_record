/* 
    总结：
        1.在哪个路由组件中嵌套子路由组件，就在哪个路由中配置子路由
        2.使用children属性配置，且子路由的 路径不用加 /
        3.调用子路由时，需要把父级路径一并带上
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