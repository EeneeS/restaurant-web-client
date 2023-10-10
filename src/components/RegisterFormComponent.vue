<template>
    <main>
        <div>
            <h2>Register Account Form</h2>
            <form action="" @submit.prevent>
                <label for="name">Name</label>
                <input v-model="name" id="name" type="text">
                <label for="email">Your Email</label>
                <input v-model="email" id="email" type="email">
                <label for="password">Password</label>
                <input v-model="password" type="password">
                <ul>
                    <p class="error" v-for="error in errors">{{ error[0] }}</p>
                </ul>
                <button @click="register">Register</button>
            </form>
        </div>
    </main>
</template>

<script>

import RegisterService from '../services/RegisterService';

export default {
    data() {
        return {
            service: new RegisterService(),
            name: "",
            email: "",
            password: "",
            errors: null
        }
    },
    methods: {
        async register() {
            const isSucces = await this.service.register(this.name, this.email, this.password);
            if (isSucces == true) {
                this.$router.push('/login');
            } else {
                this.errors = isSucces;
            }
        }
    }
}
</script>

<style scoped>
.error {
    color: red;
    font-weight: bold;
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
