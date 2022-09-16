/* 
    总结 作用：在插入、更新或移除DOM元素时，在合适的时候给元素添加样式类名
        1.使用transition标签包裹需要过渡的元素，并配置name、appear属性
        2.transiton标签的 name属性是自定义起名 appear是刷新立即执行
        3.如果 直接添加动画  则使用 v-enter-active(进入过程)  v-enter-active(离开过程)
        4.如果 只添加样式 则必须使用  v-enter v-enter-active v-enter-to(进入)  v-leave v-leave-active v-leave-to(离开)
        5.若有多个元素需要过渡，则需要使用：<transition-group>标签，且每个元素都要指定key值
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