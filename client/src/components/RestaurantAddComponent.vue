<template>
    <div id="dialog">
        <h4>Add Restaurant</h4>
        <label for="id">Id</label>
        <input v-model="id" id="id" type="text">
        <label for="name">Name</label>
        <input v-model="name" id="name" type="text">
        <label for="owner">Owner</label>
        <input v-model="owner" id="owner" type="text">
        <label for="kitchen">Kitchen</label>
        <input v-model="kitchen" id="kitchen" type="text">
        <label for="address">Address</label>
        <input v-model="address" id="address" type="text">
        <label for="stars">Stars</label>
        <input v-model="stars" id="stars" type="text">
        <div id="buttons">
            <button @click="add">add</button>
            <button @click="close">cancel</button>
        </div>
    </div>
</template>

<script>
import AddRestaurantService from '../services/AddRestaurantService';

export default {
    name: 'RestaurantAddComponent',
    data() {
        return {
            service: new AddRestaurantService(),
            id: "",
            name: "",
            owner: "",
            kitchen: "",
            address: "",
            stars: ""
        }
    },
    methods: {
        add() {
            this.service.addRestaurant(this.createRestaurantObj());
            this.close();
        },
        close() {
            this.$emit('close-dialog');
        },
        createRestaurantObj() {
            return {
                id: this.id,
                name: this.name,
                owner: this.owner,
                kitchen: this.kitchen,
                address: this.address,
                stars: this.stars
            };
        }
    },
    emits: ["close-dialog"]
}
</script>

<style scoped>
#dialog {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    padding: 1rem;
    box-shadow: 2px 2px grey;
    background-color: whitesmoke;
    width: 40rem;
    height: 27rem;
    border-radius: 0.5rem;
    overflow: scroll;
}

h4 {
    font-size: 2rem;
    font-weight: bolder;
    margin-bottom: 1rem;
}

label {
    color: #FF6000;
    font-weight: bolder;
}

input {
    display: block;
    margin-bottom: 1rem;
    width: 60%;
}

textarea {
    width: 100%;
}

#buttons {
    text-align: right;
}

#buttons button {
    margin-top: 2rem;
}
</style>