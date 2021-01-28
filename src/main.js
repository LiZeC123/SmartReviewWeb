import Vue from 'vue'
import VueRouter from "vue-router"

import App from './App.vue'
import Foo from "@/components/Foo";
import KnowledgeForm from "@/components/KnowledgeForm";
import ReviewCard from "@/components/ReviewCard";

import axios from "axios";


Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.prototype.$axios = axios


const routes = [
    {path: '/foo', component: Foo},
    {path: '/bar', component: KnowledgeForm},
    {path: '/re', component: ReviewCard}
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
