
// 导入vue-router框架
import router from 'vue-router'

// 导入需要显示的 vue组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Details from '../pages/Details.vue'

// 暴露配置的路由
export default new router({
    routes: [
        {
            path: '/about',
            component:About
        },
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component:News
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            path: 'details',
                            component: Details
                        }
                    ]
                }
            ]
        }
    ]
})