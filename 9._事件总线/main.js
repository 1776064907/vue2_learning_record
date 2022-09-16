/* 
      总结
          1.全局事件总线(globalEventBus)是一种组件通信方式，使用于任意组件间通信
          2.安装全局事件总线： Vue.prototype.$bus = this//安装全局事件总线，$bus就是当前应用的vm
          3.事件总线的原理：A想接收数据(this.$bus.$on(xxx,回调函数))，则在A中给$bus绑定自定义事件，事件的回调函数留在A组件中，b组件提供数据：this.$bus.$emit('xxx',参数...)
          4.在销毁vc之前，在beforeDestroy构造中用$off解绑当前所用到的事件
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
    beforeCreate() {
      Vue.prototype.$bus = this  
    },
})