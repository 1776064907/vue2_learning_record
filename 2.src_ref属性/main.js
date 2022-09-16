 /* < !--
    总结：  1.被用来给元素和子组件注册引用信息
            2.应用在html标签上获取的是真心DOM元素，应用在组件标签上显示的是子组件实例对象
--> */

// 引入vue
import Vue from 'vue'

// 引入App
import App from './App.vue'

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    render:h => h(App)
})