import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './axios';
import './assets/css/reset.css'
Vue.config.productionTip = false
// 按需加载 ant-desgin-vue
import {
    Button,
    Checkbox
} from 'ant-design-vue'
Vue.component(Button.name, Button)
Vue.component(Checkbox.name, Checkbox)
import Loading from './components/Loading';
import store from './store'

Vue.use(Loading)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')