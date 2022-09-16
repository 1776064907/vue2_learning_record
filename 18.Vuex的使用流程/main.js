/* 
        总结
           1.this.$store.dispatch('actions中的方法名'，参数)==>描述(context,val){context.commit('mutations中的方法名',val)}==>描述(state,val){}
           2.若没有网络请求或业务逻辑，可以越过 actions ，就是省略dispatch，直接 commit
           3.vue模板中读取vuex里的数据：$store.state.sum
*/

// 导入vue
import Vue from 'vue'

// 导入app.vue
import App from './App.vue'

// 导入store文件
import store from './store'

Vue.config.productionTip = false
new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    },
    store,
})