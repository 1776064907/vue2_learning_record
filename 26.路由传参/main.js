/* 
    总结：
        1.传递参数
            1.字符串的写法在路径后 像查询字符串方式带参数
            2. :to="{path:xxx,query:{xx:xx,}}"
        2.路由组件接收参数
            $route.query.xxx
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