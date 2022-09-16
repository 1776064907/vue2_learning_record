/* 
    总结：
        1.安装vue-router框架， vue3与vue-router4配合使用   vue2与vue-router3配合使用 
        2.创建一个路由文件
            1.1分别导入 vue-router框架 ，和需要显示的Vue组件
            1.2暴露配置的路由文件   new router({routes：[{path:xxx,component:xxx}]})
        3.在main.js文件中 导入vue-router,并用Vue.use()使用，导入路由文件，在vm中配置一个router属性，它的值是导入的路由文件
        4.使用 router-link标签  to="对应的路径"  它最终会转变为a标签
        5.使用 router-view 这个显示跳转到的组件
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