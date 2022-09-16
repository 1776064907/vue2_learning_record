
// 导入vue-router框架
import Vuerouter from 'vue-router'

// 导入需要显示的 vue组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Details from '../pages/Details.vue'

// 暴露配置的路由
const router = new Vuerouter({
    routes: [
        {   
            name:'guanyu',
            path: '/about',
            component: About,
            meta:{name:'关于'}
        },
        {   
            name:'jia',
            path: '/home',
            component: Home,
            meta: { name: '主页' },
            children: [
                {   
                    name:'xingwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, name: '新闻' }
                },
                {   
                    name:'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, name: '消息' },
                    children: [
                        {   
                            name:'xianqi',
                            path: 'details',
                            component: Details,
                            meta: { name: '详情' },
                            // 第一种写法，props值为对象，该对象中的所有属性需要该路由组件使用，props属性接收
                            // props:{id:666,title:'你好啊'}

                            // 第二种写法,props的值为布尔值，表示访问该路由组件的组件通过占位符传参，路由组件使用props接收
                            // props:true

                            // 第三种写法，
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})
    // 全局前置路由守卫--index.js文件初始化时被调用一次，每次路由切换之前被调用
    router.beforeEach((to, from, next) => {
        // console.log('@')
        // console.log(to, from)
        if (to.meta.isAuth) {
            if (localStorage.getItem('school') === 'atguigu2') {
                next()
            } else {
                alert('无权访问')
            }
        } else {
            next()
        }
    })
// 全局后置路由守卫--index.js文件初始化时被调用一次，每次路由切换之后被调用
    router.afterEach((to, from) => {
        document.title = to.meta.name || '硅谷系统'
    })

export default router