import  Vue from 'vue';
import  App from './App.vue';
import ElementUI from 'element-ui';
import store from './store';
import router from './router';

Vue.use(ElementUI)

Vue.config.productionTip = false;//关闭生产提示
new Vue({
    el: '#app',
    store,
    router,
    render: (h)=>h(App)
});
