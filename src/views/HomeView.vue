<template>
  <main>
    <p v-if="loading">Loading restaurants...</p>
    <ul>
      <li v-for="restaurant in restaurants">
        <RestaurantComponent :restaurant="restaurant"/>
      </li>
    </ul>
  </main>
</template>

<script>
import RestaurantComponent from '../components/RestaurantComponent.vue';
export default {
    name: "HomeView",
    data() {
        return {
            restaurants: null,
            loading: true
        };
    },
    created() {
        this.fetchRestaurants();
    },
    methods: {
        async fetchRestaurants() {
            const response = await fetch("http://laravel.restaurants/api/restaurants/list");
            const restaurants = await response.json();
            this.loading = false;
            this.restaurants = restaurants;
        }
    },
    props: ["language"],
    components: { RestaurantComponent }
}
</script>

<style scoped>
p {
  text-align: center;
}

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
  width: 80%;
}

li:hover {
  cursor: pointer;
}
</style>
