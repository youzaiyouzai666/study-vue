import Vue from 'vue';
import Router from 'vue-router';

import MainSec from '@/components/MainSec.vue';
import ArticleCom from '@/components/ArticleCom';

Vue.use(Router);
const routes = [
    {
        path: '/',
        name: 'RootPath',
        components: {
            main: MainSec
        }
    }, {
        path: '/topic/:id',
        name: 'ArticleRoute',
        components: {
            main: ArticleCom,
            // side: SideSec,
        },
    }
]
export default new Router({
    routes
})