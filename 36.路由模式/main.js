/* 
    总结：
        1.对于url来说 #后面的内容都是hash值，它不包含在http请求中，即hash值不会被带给服务器
        2.hash值模式： 地址中带着#号不美观，兼容性较好
        3.history模式： 地址干净，美观，兼容性较差，应用部署上线时需要后端人员支持，解决刷新页面服务端404问题(当重新刷新页面时会显示404)
        4.npm run bulid 打包应用
        5.一般放置应用的文件叫 static或者public


         
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