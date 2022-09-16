/* 
    总结：
        1.路由文件中 ，在需要传参的路由的路径后面 使用 :id/:title 来占位
        2.然后直接在   :to=`"xxxx/xxx/${id}/${title}"`
        3.如果 :to的值是一个对象 ，那么params不能与path一起用不然会报错
        4.获取数据  $route.params.xxx
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