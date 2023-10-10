<template>
    <div>
        <h2>Login Form</h2>
        <form @submit.prevent>
            <label for="email">Your Email</label>
            <input v-model="email" id="email" type="email" placeholder="email">
            <label for="password">Password</label>
            <input v-model="password" type="password" placeholder="password">
            <p class="error" v-if="unauthorized">Unauthorized</p>
            <button @click="login">Login</button>
        </form>
    </div>
</template>

<script>

import LoginService from '../services/LoginService.js';

export default {
    data() {
        return {
            service: new LoginService(),
            email: "",
            password: "",
            unauthorized: false
        }
    },
    methods: {
        async login() {
            const token = await this.service.login(this.email, this.password);
            if (token) {
                localStorage.setItem('token', `Bearer ${token}`);
                this.$emit('update-logged-in');
                this.$router.push('/');
            } else {
                this.unauthorized = true;
            }
        },
    }, emits: ['update-logged-in']
}
</script>

<style scoped>

.error {
    color: red;
    font-weight: bolder;
    margin-bottom: 1rem;
}

div {
    width: 25rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem;
}

h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #FF6000;
    font-weight: bold;
}

form {
    width: 90%;
}

input {
    width: 100%;
    margin-bottom: 1rem;
}

label, button {
    display: block;
}

button {
    width: 5rem;
    margin-left: auto;
    margin-right: auto;
    background-color: #FF6000;
    color: white;
    border-radius: 1rem;
    border: none;
    padding: 0.4rem;
    cursor: pointer;
}

</style>