import Vue from 'vue';
// import routes from './routes';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import not404 from './pages/404.vue';


const routes = {
    '/':Home,
    '/about':About
}

const app = new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent() {
            const matchingView = routes[this.currentRoute];
            //TODO 变成动态 evel模式的
            return matchingView ? matchingView: not404;      
        }
    },
    render(h){
        return h(this.ViewComponent);
    }
});

window.addEventListener('popstate', () => {
    app.currentRoute = window.location.pathname
  })
