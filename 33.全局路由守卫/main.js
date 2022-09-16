/* 
    总结：
         1.vuerouter实例对象的两个方法 router.beforeEach((to,from,next)=>{})/router.afterEach((to,from)=>{})
         2.两个方法都会在index.js文件夹初始化时被调用一次，beforeEach在路由切换之前被调用，注意必须要在所有代码使用next方法，afterEach路由切换之后被调用，
         3.可以在mete属性里配置一个自定义内容
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