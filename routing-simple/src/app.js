import Vue from 'vue';
import routes from './routes';

const app = new Vue({
   el:'#app',
   data:{
       currentRoute: window.location.pathname
   },
    computed:{
       ViewComponent(){
           const matchingView = routes[this.currentRoute];
           return matchingView
       }
    }
});