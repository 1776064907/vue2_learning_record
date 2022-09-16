/* 
    总结：
        1.安装 axioxs 并导入(axios与vue框架配合使用效果要更好)
        2.在vue.config.js文件夹中配置 以下代码， 作用是开启了代理服务器
        注意：当没有加上 前缀时 代理是不会转发请求的
        devServer: {
         proxy: {
      '/atguigu': {  //请求路径是以‘atguigu’为前缀的，代理才会转发请求，不然不转发
        target: 'http://localhost:5000', //请求的目标路径
        changeOrigin: true,  //为true的，代理路径为 5000，为false代理路径为8080
        pathRewrite:{'atguigu':''}
      },
      '/cars': {
        target: 'http://localhost:5001',
        changeOrigin: true,
        pathRewrite: { 'cars': '' }
      },
    }
    }
        3.
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