
// 导入vue-router框架
import router from 'vue-router'

// 导入需要显示的 vue组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'

// 暴露配置的路由
export default new router({
    routes: [
        {
            path: '/about',
            component:About
        },
        {
            path: '/home',
            component: Home
        }
    ]
})