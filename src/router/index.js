import { createRouter, createWebHistory } from 'vue-router'
import MenuPage from '@/components/MenuPage.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import ReservaTurno from '@/components/ReservaTurno.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },



    { 
      path: '/',
      name: 'MenuPage',
      component: MenuPage,
    },

    { 
      path: '/reservaTurno',
      name: 'ReservaTurno',
      component: ReservaTurno,
    },


    { 
      path: '/login',
      name: 'Login',
      component: Login,
    },

    { 
      path: '/register',
      name: 'Register',
      component: Register,
    },

   
    // { 
    //   path: '/carrito',
    //   name: 'Carrito',
    //   component: Carrito,
    // },
   

   
   

    



  ],
})








export default router
