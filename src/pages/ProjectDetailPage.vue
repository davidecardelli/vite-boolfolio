<script>
import axios from 'axios';
const apiBaseUrl = 'http://127.0.0.1:8000/api/'
export default {
    name: 'ProjectDetailPage',
    components: {},
    data: () => ({
        project: null
    }),
    props: {
    },
    computed: {
    },
    methods: {
        fetchPostDetails() {
            axios.get(apiBaseUrl + 'projects/' + this.$route.params.id).then(res => {
                this.project = res.data
            })
        }
    },
    created() {
        this.fetchPostDetails()
    },
    emits: [],
}
</script>

<template>
    <div class="col-4 mx-auto">
        <div class="card d-flex flex-column align-items-center justify-content-center h-100">
            <img class="p-3 card-img-top" :src="project.image" :alt="project.title">
            <div class="card-body">
                <p class="text-center text-black mt-2 fw-bold text-uppercase">{{ project.title }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>