/* 
    总结：
        1.子组件传递数据给父组件一共有三种方式
        父组件给子组件传递一个函数，子组件以函数调用的形式把数据传递给父组件
        在该子组件标签上设置一个自定义事件 @atguigu="函数" 然后再该子组件里 设置 vc.$emit('自定义事件'，'参数'，.....)，$emit作用就是触发自定义事件
        可以使用 ref 来获取该子组件的实例，$on('监听的事件',事件处理函数)是用来监听事件是否触发，它是与 vc.$emit一起配合使用的
        2.注意：通过```this.$refs.xxx.$on('atguigu',回调)```绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则this指向会出问题！
        3.vm.$once表示只监听该事件一次
        4.解除绑定事件的3种写法
            this.off()  取消绑定所有自定义事件
            this.off('指定事件')  取消绑定指定自定义事件
            this.off(['自定义事件1'，'自定义事件二'])  取消绑定多个自定义事件
        5.组件上默认是不可以绑定原生DOM事件的，会被认为是自定义事件，如果想使用自定义事件需要加native修饰符 @click.native
        6.
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