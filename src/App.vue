<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    name: 'App',
    components: { AppHeader, AppFooter },
    data() {
        return {}
    },
    props: {
    },
    computed: {
    },
    methods: {
    },
    emits: [],
}
</script>

<template>
    <app-header></app-header>

    <app-footer></app-footer>
</template>

<style></style>