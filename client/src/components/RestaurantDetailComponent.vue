<template>
    <div id="restaurant">
        <router-link to="/">back</router-link>
        <h3>{{ restaurant.name }}</h3>
        <p><span>owner: </span>{{ restaurant.owner }}</p>
        <p><span>kitchen: </span>{{ restaurant.kitchen }}</p>
        <p><span>stars: </span>{{ restaurant.stars }}</p>
        <p><span>address: </span>{{ restaurant.address }}</p>
        <p><span>description: </span>{{ restaurant.translations[0] ? restaurant.translations[0].description : "no description" }}</p>
    </div>
</template>

<script>
export default {
    name: "RestaurantDetailComponent",
    props: ['restaurant']
}
</script>

<style scoped>

div {
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 60%;
    height: 10rem;
    box-shadow: 1px 1px 1px 1px black;
    border-radius: 0.5rem;
    margin-top: 15rem;
    margin-left: auto;
    margin-right: auto;
    padding: 2rem;
}

a {
    color: #FF6000;
    margin-top: 0.3rem;
    text-align: right;
}

h3 {
    font-size: 2rem;
    font-weight: bolder;
    color: #FF6000;
    margin-bottom: 0.2rem;
    margin-top: 0.4rem;
}

span {
    font-weight: bolder;
}

p {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}

</style>