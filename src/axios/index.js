import axios from 'axios';
import VueAxios from 'vue-axios';
import Vue from 'vue';

axios.defaults.timeout = 5000; // 超时时间
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL; // 请求前缀
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
Vue.use(VueAxios, axios);

// 请求拦截器
axios.interceptors.request.use(config => {
    return config;
});

// 响应拦截器
axios.interceptors.response.use(
    response => {
        return response.data;
    },
    err => {
        if (err.response.status === 401) { // 未授权

        }
    },
);