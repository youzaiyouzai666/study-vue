import  Vue from 'vue';
import Icon from 'vue-svg-icon/Icon';
import ElementUI from 'element-ui';

import  App from './App.vue';
import store from './store';
import router from './router';

Vue.use(ElementUI)
Vue.component('icon', Icon)

Vue.config.productionTip = false;//关闭生产提示
new Vue({
    el: '#app',
    store,
    router,
    render: (h)=>h(App)
});
