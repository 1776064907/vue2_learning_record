
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
            name:'guanyu',
            path: '/about',
            component:About
        },
        {   
            name:'jia',
            path: '/home',
            component: Home,
            children: [
                {   
                    path: 'news',
                    component:News
                },
                {   
                    name:'xiaoxi',
                    path: 'message',
                    component: Message,
                    children: [
                        {   
                            name:'xianqi',
                            path: 'details',
                            component: Details,
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