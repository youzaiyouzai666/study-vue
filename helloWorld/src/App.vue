<template>
    <div id="app">
        <hello-world/>
    </div>
</template>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>

<script>
    import HelloWorld from './components/HelloWorld.vue';
    export default {
        components:{
            HelloWorld
        }
    }
</script>