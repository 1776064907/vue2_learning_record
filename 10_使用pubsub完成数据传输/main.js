/* 
      总结   pub(publish发布) sub(subcribe订阅)
          1.安装框架: npm i pubsub-js
          2.在需要的组件中导入： import pubsub from 'pubsub-js'
          3.接收数据的组件：pubsub.subscribe('订阅消息',回调函数)注意：回调函数的第一个参数是 订阅的消息名，第二个参数才是接收过来的参数
          4.提供数据的组件：pubsub.publish('发布消息',传递的数据)
          5.最好在beforedestroy钩子中，用pubsub.unsubscribe去取消订阅
*/


// 引入vue
import Vue from 'vue'

// 引入App
import App from './App.vue'

// 引入插件

Vue.config.productionTip = false;


new Vue({
    el: '#app',
    render: h => h(App),
})