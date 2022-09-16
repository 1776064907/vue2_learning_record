/* 
    总结：
        1.路由组件通常放在pages文件中，一般组件放在componets文件夹中
        2.通过切换，“隐藏的路由组件”，默认是被销毁的，需要的时候再去挂载，
        3.每个路由组件都有自己的$route属性，里面储存着组件的路由信息
        4.整个应用只有一个router，可以通过组件的$router属性获取
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