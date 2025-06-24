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
                    path:'detail/:id/:title/:content?',
                    // path:'detail',
                    component:Detail,
                    
                    //第一种写法
                    //注意：这里只能用于params参数
                    props:true//相当于把路由收到的所有params参数转换为组件传参的形式

                    //第二种写法
                    //可以自己决定将什么作为props传递给路由组件
                    //可用于query参数
                    // props(route){
                    //     console.log(route)//就是route对象，包含query，params等参数
                    //     // return{
                    //     //     x:100,
                    //     //     y:200,
                    //     //     z:300
                    //     // }
                    //     return route.query
                    // }

                    //第三种写法
                    // props:{
                    //     a:100,
                    //     c:100
                    // }
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