<script>
import axios from 'axios';
import AppCard from '../components/AppCard.vue';
const apiBaseUrl = 'http://127.0.0.1:8000/api/'


export default {
    name: 'ProjectsPage',
    components: { AppCard },
    data: () => ({
        projects: []
    }),
    props: {
    },
    computed: {
    },
    methods: {
        fetchPosts() {
            axios.get(apiBaseUrl + 'projects').then(res => {
                this.projects = res.data
            })
        }
    },
    created() {
        this.fetchPosts()
    },
    emits: [],
}
</script>

<template>
    <main class="my-5">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-xl-6">
                <app-card v-for="project in projects" :project="project"></app-card>
            </div>
        </div>
    </main>
</template>
