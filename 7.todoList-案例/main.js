

// 引入vue
import Vue from 'vue'

// 引入App
import App from './App.vue'

// 引入插件

Vue.config.productionTip = false;


new Vue({
    el: '#app',
    render:h => h(App)
})