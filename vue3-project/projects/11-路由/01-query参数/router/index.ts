import {createRouter,createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import News from '@/views/News.vue'
import About from '@/views/About.vue'
import Detail from '@/views/Detail.vue'

const router = createRouter({
    history:createWebHistory(),//工作模式，必须决定工作模式
    routes:[
        {
            name:'home',
            path:'/home',
            component:Home
        },
        {
            name:'news',
            path:'/news',
            component:News,
            children:[
                {
                    name:'xiang',
                    //子集的path不需要加'/'
                    path:'detail',
                    component:Detail
                }
            ]
        },
        {
            name:'about',
            path:'/about',
            component:About
        }
    ]
})

export default router