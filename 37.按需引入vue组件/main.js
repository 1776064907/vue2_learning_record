
// 导入vue
import Vue from 'vue'

// 导入app.vue
import App from './App.vue'

// 完整引入element Ui
/* import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI); */

// 按需引入element ui
import { Button, Row, DatePicker } from 'element-ui';
Vue.component('atguigu-button', Button)
Vue.component('atguigu-row', Row)
Vue.component('atguigu-date-picker', DatePicker)


Vue.config.productionTip = false
new Vue({
    el: '#app',
    render: h => h(App),
})