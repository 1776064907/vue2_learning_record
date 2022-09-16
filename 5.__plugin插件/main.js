// 总结
// 功能：用于增强Vue
/* 1.本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件的使用者传递的数据
2.定义插件：单独创建一个 plugin.js文件，然后添加全局配置
然后再在main.js文件中导入 plugin.js文件，使用Vue.use(plugin)方法 */


// 引入vue
import Vue from 'vue'

// 引入App
import App from './App.vue'

// 引入插件
import plugins from './plugin'

Vue.config.productionTip = false;

Vue.use(plugins,1,23,4)

new Vue({
    el: '#app',
    render:h => h(App)
})