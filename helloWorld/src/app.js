import  Vue from 'vue';
import  App from './App.vue';

Vue.config.productionTip = false;//关闭生产提示
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',

});
