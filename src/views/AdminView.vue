<template>
<main v-if="!loggedIn">
    <h2>Please Login or create an account</h2>
</main>
<main v-else>
    <RestaurantEditComponent v-if="editing" :restaurant="clickedRestaurant" @close-dialog="closeDialog" />
    <RestaurantAddComponent v-if="adding" @close-dialog="closeDialog"/>
    <header>
        <FilterComponent @filter-restaurants="filterRestaurants"/>
        <h4 @click="adding = true">Add Restaurant</h4>
    </header>
    <div id="restaurants">
        <ul>
            <li v-for="restaurant in filteredRestaurants">
                <RestaurantComponent @update-restaurant="startEdit" :restaurant="restaurant" :canEdit="true"/>
            </li>
        </ul>
    </div>
</main>
</template>

<script>

import RestaurantComponent from '../components/RestaurantComponent.vue';
import RestaurantEditComponent from '../components/RestaurantEditComponent.vue';
import RestaurantAddComponent from '../components/RestaurantAddComponent.vue';
import FilterComponent from '../components/FilterComponent.vue';

export default {
    name: "AdminView",
    data() {
        return {
            loading: false,
            restaurants: null,
            filteredRestaurants: null,
            editing: false,
            adding: false,
            clickedRestaurant: null,
        };
    },
    created() {
        this.fetchRestaurants();
    },
    methods: {
        async fetchRestaurants() {
            const response = await fetch('http://laravel.restaurants/api/restaurants', {
                headers: {
                    Authorization: `${localStorage.getItem("token")}`
                }
            });
            const restaurants = await response.json();
            this.loading = false;
            this.restaurants = restaurants;
            this.filteredRestaurants = restaurants;
        },
        startEdit(restaurant) {
            this.editing = true;
            this.clickedRestaurant = restaurant;
        },
        closeDialog() {
            this.editing = false;
            this.adding = false;
        },
        filterRestaurants(name) {
            if (name === "") {
                this.filteredRestaurants = this.restaurants;
            } else {
                this.filteredRestaurants = this.restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(name.toLowerCase()));
            }
        }
    },
    components: { RestaurantComponent, RestaurantEditComponent, RestaurantAddComponent, FilterComponent },
    props: ["loggedIn"],
}
</script>

<style scoped>
#restaurants ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  margin-bottom: 5rem;
}

h4 {
    text-align: center;
    font-weight: bolder;
    color: white;
    background-color: #FF6000;
    border-radius: 1rem;
    cursor: pointer;
    width: 8rem;
    padding: 1rem;
}

header {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
}
</style>