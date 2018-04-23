import Vue from 'vue';
import Router from 'vue-router';

import Home from '../components/home.vue';
import Company from '../components/company.vue';


Vue.use(Router)

export default new Router({
  routes: [
    { path:'/', redirect: '/home' }, 
    { path: '/home', name: 'home', component: Home, 
    children: [
        { path: '/company', name: 'company', component: Company } // 公司信息 
        // { path: '/company', name: 'company', component: Company }, // 公司信息 
        // { path: '/company', name: 'company', component: Company }, // 公司信息 
      ]
    }
    

  ]
})
