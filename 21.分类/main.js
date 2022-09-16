/* 
        总结
           1.namespaced：true 一定要开启
           2.获取state中的数据： this.$store.state.countAbout.personList
           3.获取getters中的数据： this.$store.getters["personAbout/getFirstName"]
           4....mapState("countAbout", ["sum"]) 第一个参数填所属配置里
           5.this.$store.dispatch("personAbout/addpersonWang", person);
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