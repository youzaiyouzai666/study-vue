import Vue from 'vue';
import App from '../components/App.vue';

const app = new Vue(App);

export default function(context){
    return new Promise((resolve, reject)=>{
        resolve(app);
    });
}