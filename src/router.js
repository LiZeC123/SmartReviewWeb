import Vue from "vue";
import VueRouter from "vue-router"
import Foo from "@/components/Foo";
import KnowledgeForm from "@/components/KnowledgeForm";
import ReviewCard from "@/components/ReviewCard";

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {path: '/foo', component: Foo},
        {path: '/bar', component: KnowledgeForm},
        {path: '/re', component: ReviewCard}
    ]
})