<template>
    <main>
        <LoginFormComponent @update-logged-in="updateLoggedIn"/>
    </main>
</template>

<script>

import LoginFormComponent from '../components/LoginFormComponent.vue'

export default {
    name: 'LoginView',
    methods: {
        updateLoggedIn() {
            this.$emit('update-logged-in');
        }
    },
    components: { LoginFormComponent }
}
</script>

<style scoped>
</style>