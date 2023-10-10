<template>
    <form action="#">
        <label for="name">name</label>
        <input id="name" type="text" v-model="name" @keyup="filterRestaurant">
    </form>
</template>

<script>
export default {
    name: "FilterComponent",
    data() {
        return {
            name: "",
        }
    },
    methods: {
        filterRestaurant() {
            this.$emit('filter-restaurants', this.name);
        }
    },
    emits: ['filter-restaurants']

}
</script>

<style scoped>

form {
    text-align: center;
    color: white;
    font-weight: bolder;
    margin-top: 1rem;
    margin-bottom: 3rem;
}

label {
    margin-right: 0.3rem;
}

#name {
    margin-right: 1rem;
}

button {
    border: none;
    border-radius: 0.3rem;
    margin-left: 1rem;
}
</style>