// 导入vue
import Vue from 'vue'

// 导入app.vue
import App from './App.vue'

Vue.config.productionTip = false
new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    },
})