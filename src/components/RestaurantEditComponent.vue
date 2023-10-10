<template>
    <div id="dialog">
        <h4>Restaurant Editing</h4>
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
        <label>en</label>
        <textarea v-model="en" id="en" type="text"/>
        <button class="saveLang" @click="saveLanguage('en')">save</button>
        <label>nl</label>
        <textarea v-model="nl" id="nl" type="text"/>
        <button class="saveLang" @click="saveLanguage('nl')">save</button>
        <label>fr</label>
        <textarea v-model="fr" id="fr" type="text"/>
        <button class="saveLang" @click="saveLanguage('fr')">save</button>
        <div id="buttons">
            <button @click="save">save</button>
            <button @click="close">cancel</button>
            <button @click="deleteRestaurant">delete</button>
        </div>
    </div>
</template>

<script>
import EditRestaurantService from '../services/EditRestaurantService.js';
export default {
    name: "RestaurantEditComponent",
    data() {
        return {
            service: new EditRestaurantService(),
            name: this.restaurant.name,
            owner: this.restaurant.owner,
            kitchen: this.restaurant.kitchen,
            address: this.restaurant.address,
            stars: this.restaurant.stars,
            en: this.restaurant.translations.find(obj => obj.lang === 'en') ? this.restaurant.translations.find(obj => obj.lang === 'en').description : "",
            nl: this.restaurant.translations.find(obj => obj.lang === 'nl') ? this.restaurant.translations.find(obj => obj.lang === 'nl').description : "",
            fr: this.restaurant.translations.find(obj => obj.lang === 'fr') ? this.restaurant.translations.find(obj => obj.lang === 'fr').description : "",
        }
    },
    methods: {
        save() {
            this.service.updateRestaurant(this.createRestaurantObj());
            this.close();
        },
        close() {
            this.$emit('close-dialog');
        },
        deleteRestaurant() {
            this.service.deleteRestaurant(this.restaurant.restaurant_id);
            this.close();
        },
        saveLanguage(lang) {
            switch(lang) {
                case 'nl':
                    this.service.languageAdded(this.restaurant, lang) ? this.service.updateLanguage(this.restaurant.restaurant_id, lang, this.nl) 
                                                                      : this.service.addRestaurantLanguage(this.restaurant.restaurant_id, lang, this.nl);
                    break;

                case 'en':
                this.service.languageAdded(this.restaurant, lang) ? this.service.updateLanguage(this.restaurant.restaurant_id, lang, this.en) 
                                                                      : this.service.addRestaurantLanguage(this.restaurant.restaurant_id, lang, this.en);
                    break;

                case 'fr':
                this.service.languageAdded(this.restaurant, lang) ? this.service.updateLanguage(this.restaurant.restaurant_id, lang, this.fr) 
                                                                      : this.service.addRestaurantLanguage(this.restaurant.restaurant_id, lang, this.fr);
                    break;
            }
        },
        createRestaurantObj() {
            return {
                id: this.restaurant.restaurant_id,
                name: this.name,
                owner: this.owner,
                kitchen: this.kitchen,
                address: this.address,
                stars: this.stars
            }
        }
    },
    props: ["restaurant"]
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
    height: 39rem;
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