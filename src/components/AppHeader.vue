<script>
export default {
    name: 'AppHeader',
    components: {},
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
    <!-- Start Header Component -->
    <header class="bg-black">
        <nav class="navbar navbar-expand-md container">
            <router-link class="nav-brand nav-link text-uppercase text-white fw-bold p-2 fs-3" to="/">Cardè</router-link>


            <button class="navbar-toggler p-2" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon color-white"></span>
            </button>

            <div class="collapse navbar-collapse flex-grow-0 p-2" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link text-uppercase text-white fw-bold" to="/">Home</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <!-- End Header Component -->
</template>


<style lang="scss" scoped></style>