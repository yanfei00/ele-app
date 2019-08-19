import Vue from 'vue'
import VueRouter  from 'vue-router'


//安装插件
Vue.use(VueRouter)

const routes =[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/login',
    name:'login',
    component:() => import('components/content/login/Login')
  },

  {
    path:'/home',
    component:() =>import('views/home/Home')
  },
  {
    path:'/order',
    component:() =>import('views/order/Order')
  },
  {
    path:'/profile',
    component:() =>import('views/profile/Profile')
  }
]

const router = new VueRouter({
  routes,
  mode:'history',
  base:process.env.BASE_URL
})

//全局导航守卫
router.beforeEach((to,from,next) =>{
  const isLogin = localStorage.ele_login ? true : false
  if (to.path == '/login'){
    next()
  }else {
    isLogin ? next() : next('/login')
  }
})

export default router

