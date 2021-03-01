import Vue from "vue";
import VueRouter from "vue-router"

import KnowledgeForm from "@/components/KnowledgeForm";
import ReviewRecentCard from "@/components/ReviewRecentCard";

import Login from "@/view/Login";
import Main from "@/view/Main";
import ReviewAllCard from "@/components/ReviewAllCard";
import ExportTable from "@/components/ExportTable";
import TagPage from "@/components/TagPage";


Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', redirect: '/home/recent'},
        {path: '/login', component: Login},
        {
            path: '/home', component: Main,
            children: [
                {path: 'recent', component: ReviewRecentCard},
                {path: 'create', component: KnowledgeForm},
                {path: 'knowledge', component: ReviewAllCard},
                {path: 'tag', component: TagPage},
                {path: 'export', component: ExportTable}
            ]
        }
    ]
})