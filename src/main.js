import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import router from "@/router";
import store from "@/store";

Vue.config.productionTip = false

Vue.prototype.$axios = axios

axios.defaults.baseURL = '/api'
axios.interceptors.request.use(config => {
    if(store.state.token) {
        config.headers.common['Authorization'] = store.state.token;
    }
    return config;
});


// 页面刷新时，重新赋值token
if (sessionStorage.getItem('token')) {
    store.commit('set_token', sessionStorage.getItem('token'))
}

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
