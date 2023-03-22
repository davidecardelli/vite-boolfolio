<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    name: 'App',
    components: { AppHeader, AppFooter, },
    data: () => ({}),
    props: {
    },
    computed: {
    },
    methods: {},
    emits: [],
}
</script>

<template>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
</template>

<style>
#app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>