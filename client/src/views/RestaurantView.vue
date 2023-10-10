<template>
    <main>
        <p v-if="loading">Loading restaurant...</p>
        <RestaurantDetailComponent v-else :restaurant="restaurant"/>
    </main>
</template>

<script>
import RestaurantDetailComponent from '../components/RestaurantDetailComponent.vue';

export default {
    data() {
        return {
            restaurant: null,
            loading: true,
        };
    },
    created() {
        this.fetchRestaurant();
    },
    methods: {
        async fetchRestaurant() {
            const response = await fetch(`http://laravel.restaurants/api/restaurants/restaurant/${this.$route.params.id}?lang=${encodeURIComponent(this.language)}`);
            const data = await response.json();
            this.restaurant = data[0];
            this.loading = false;
        }
    },
    watch: {
        language(newValue, oldValue) {
            this.fetchRestaurant();
        }
    },
    props: ['language'],
    components: { RestaurantDetailComponent }
}
</script>

<style scoped>

</style>