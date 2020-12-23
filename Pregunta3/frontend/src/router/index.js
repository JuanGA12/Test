import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/UserRegistration.vue'
import Login from '../views/UserLogin.vue'
import After from '../views/AfterLoginorRegister.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      isAuth: false
    }
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,
    meta:{
      isAuth: false
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta:{
      isAuth: false
    }
  },
  {
    path: '/After',
    name: 'After',
    component: After,
    meta:{
      isAuth: true
    }
  },
  {
    path: '*',
    redirect: '/'
  },
  //{
  //  path: '/about',
  //  name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) =>{
  if(to.meta.isAuth){
    if(window.localStorage.currentUser){
      let user = JSON.parse(window.localStorage.currentUser)
      if (!user){
        next('/Login')
      }
    }else{
      next('/Login')
    }  
  }
  next()
})

export default router
