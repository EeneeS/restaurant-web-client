<template>
    <div @click="handleClick" class="restaurant" :class="{'extended' : canEdit}">
        <header v-if="canEdit">
            <h3>{{  restaurant.name  }}</h3>
            <span class="material-symbols-outlined">edit</span>
        </header>
        <h3 v-else >{{  restaurant.name  }}</h3>
        <p>{{ restaurant.kitchen }}</p>
        <p>{{ restaurant.owner }}</p>
        <div v-if="canEdit" class="description">
            <ul>
                <li v-for="translation in restaurant.translations">
                    <p><span>{{ translation.lang }}: </span>{{ translation.description }}</p>
                </li>
            </ul>
        </div>
        <p id="stars" v-if="!canEdit"><span v-for="star in restaurant.stars" class="material-symbols-outlined">star</span></p>
        <p v-else><span>stars: </span>{{ restaurant.stars }}</p>
    </div>
</template>

<script>
export default {
    name: "RestaurantComponent",
    methods: {
        handleClick() {
            if (!this.canEdit) {
                this.$router.push(`/restaurants/${this.restaurant.restaurant_id}`)
            } else {
                this.$emit('update-restaurant', this.restaurant);
            }
        },
    },
    props: ["restaurant", "canEdit"],
    emits: ['update-restaurant'],
}
</script>

<style scoped>
.restaurant {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 2px 2px grey;
    background-color: white;
    border-radius: 0.5rem;
    width: 20rem;
    height: 12rem;
    padding: 1rem;
}

.restaurant h3 {
    font-size: 1.7rem;
    font-weight: bolder;
}

.restaurant p {
    font-size: 1.2rem;
}

.restaurant div h3, .restaurant div p {
    margin-top: 1rem;
    margin-left: 2rem;
}

.restaurant #stars {
    color: #FF6000;
}

.restaurant header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.restaurant header span {
    cursor: pointer;
    color: #FF6000;
}

.description li {
    margin-bottom: 1rem;
}

.extended {
    height: 20rem;
    width: 40rem;
}
</style>