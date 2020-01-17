import Vue from 'vue';
import Router from 'vue-router';
// 如果有嵌套路由的话，分模块去写路由配置
import homeRouter from './home';
import testRouter from './test';
import clickRouter from './click';
Vue.use(Router);

export default new Router({
    routes: [
        ...homeRouter,
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ '@/views/About')
        },
        ...testRouter,
        {
            path:'/Class',
            name:'class',
            component: () => import('@/views/Class')
        },
        ...clickRouter,
        {
            path: '/',
            redirect: 'home'
        },
    ],
});