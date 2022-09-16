/* 
    总结
        1、功能：可以把多个组件共用的配置提取成一个单独的文件
        2、提供出来的数据最终都会出现在vc上
        2、创建一个单独的js文件，来存放 共用的配置  并使用 export 导出，可以多个导出
        3、在需要 该配置的组件中 导入该js文件， 然后再给组件 添加一个 mixins:['xxx']
        4、在main.js文件中 导入共用的配置文件，并用 Vue.mixin(xxx，...)注册成全局共用配置
*/


// 引入vue
import Vue from 'vue'

// 引入App
import App from './App.vue'

import {hunhe,hum} from './mixin'
Vue.config.productionTip = false;

Vue.mixin(hunhe,hum)

new Vue({
    el: '#app',
    render:h => h(App)
})