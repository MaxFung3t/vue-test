import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Sync from '@/components/Sync/Sync.vue'
import Vmodel from '@/components/Vmodel/Vmodel.vue'
import BlogPost from '@/components/BlogPost/BlogPost.vue'
import './axios';
import './assets/css/reset.css'
Vue.config.productionTip = false
// 按需加载 ant-desgin-vue
import { Button, Checkbox } from 'ant-design-vue'
Vue.component(Button.name, Button)
Vue.component(Checkbox.name, Checkbox)

Vue.component('Sync', Sync)
// Vue.component('Vmodel', Vmodel)
Vue.component('custom-input', Vmodel)
Vue.component('blog-post', BlogPost)
import Loading from './components/Loading';
import store from './store'
Vue.use(Loading)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')