<script>
export default {
    name: 'AppCard',
    components: {},
    data() {
        return {}
    },
    props: {
        project: Object
    },
    computed: {
    },
    methods: {
    },
    emits: [],
}
</script>

<template>
    <!-- Start AppCard Component -->
    <div class="col mb-3">
        <div class="card d-flex flex-column align-items-center justify-content-center h-100">
            <router-link class="nav-link" :to="{ name: 'projects-detail', params: { id: project.id } }">
                <img class="p-3 card-img-top" :src="project.image" :alt="project.title">
            </router-link>
            <div class="card-body">
                <p class="text-center text-black mt-2 fw-bold text-uppercase">{{ project.title }}</p>
            </div>
        </div>
    </div>
    <!-- End AppCard Component -->
</template>



<style lang="scss" scoped></style>