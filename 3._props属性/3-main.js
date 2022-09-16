/* 
    总结
功能：让组件接收外部传递过来的数据
1、接收过来的数据 都会出现在VC身上
2、接收数据的三种方式
props: ['name'](只接收)
props: { name: String } (限制接收数据的类型)
props: {
    name: {
        type: String,
            required: true,  //必须要接收的数据
                    default: 99,    //当外部没有传递该数据，组件给的默认值
                }
}
3、props是只读的，Vue底层会监测对props的修改，如果进行了修改，就会发出警告，若必须要修改，则把接收过来的数据复制到data中去，然后修改data中复制的数据
 */

// 引入vue
import Vue from 'vue'

// 引入App
import App from './App.vue'

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    render:h => h(App)
})