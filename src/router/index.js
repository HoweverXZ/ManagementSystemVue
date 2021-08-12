import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from "../components/HelloWorld";
import App from "../App";
import UpdateVue from "../components/UpdateVue";

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/',
      component:App
    },
    {
      path:'/update',
      name:'upadate',
      component: UpdateVue
    }
  ]
})
