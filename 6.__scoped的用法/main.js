/* 
    总结：scoped的作用
        1、让样式在局部生效，防止冲突 (自动添加属性data-v-7ba5bd90)
        2、写法 <style scoped>
        3、<style lang="less">  以less语法编译样式
*/

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