import  Vue from 'vue';
import  App from './components/App.vue';
import store from './store'

Vue.config.productionTip = false;//关闭生产提示
new Vue({
    el: '#app',
    store,
    components: { App },//注册指令
    template: '<App/>',

});
