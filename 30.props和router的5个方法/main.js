/* 
    总结：
         1.$router的两个API $touter.push({}) $touter.replace({}) 花括号里的配置 跟 to里面的配置是一样的
         2.$router的3个方法 $router.back()，$router.forward()，$router.go()
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