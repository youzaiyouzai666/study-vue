import Vue from 'vue';
import Hello from "../components/Hello.vue";

new Vue({
    el: "#test",
    template: '<Hello/>',
    components: { Hello }
})