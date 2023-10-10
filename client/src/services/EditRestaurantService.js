const _RestaurantURL = "http://laravel.restaurants/api/restaurants";
const _LanguageURL = "http://laravel.restaurants/api/descriptions";

export default class EditRestaurantClass {

    async updateRestaurant(restaurantData) {
        const body = this.createRestaurantBody(restaurantData);
        const response = await fetch(`${_RestaurantURL}/${restaurantData.id}`, body);
        const data = await response.json();
        if (data.errors) {
            alert("updating restaurant failed");
        }
    }

    createRestaurantBody(information) {
        return {
            method: "PUT",
            headers: {
                Authorization: `${localStorage.getItem("token")}`
            },
            body: this.createRestaurantParams(information)
        }
    }

    createRestaurantParams(information) {
        const data = new URLSearchParams();
        data.append("restaurant_id", information.id);
        data.append("name", information.name);
        data.append("kitchen", information.kitchen);
        data.append("owner", information.owner);
        data.append("stars", information.stars);
        data.append("address", information.address);
        return data;
    }

    async updateLanguage(id, lang, description) {
        const body = this.createUpdateLanguageBody(id, lang, description);
        const response = await fetch(`${_LanguageURL}/${id}`, body);
        const data = await response.json();
        if (data.errors) {
            alert("error updating language");
        }
    }

    createUpdateLanguageBody(id, lang, description) {
        return {
            method: "PUT",
            headers: {
                Authorization: `${localStorage.getItem("token")}`
            },
            body: this.createLanguageParams(id, lang, description)
        }
    }

    createLanguageParams(id, lang, description) {
        const data = new URLSearchParams();
        data.append("restaurant_id", id);
        data.append("lang", lang);
        data.append("description", description);
        return data
    }

    languageAdded(restaurant, lang) {
        return restaurant.translations.find(obj => obj.lang === lang) ? true : false;
    }

    async addRestaurantLanguage(id, lang, description) {
        const body = this.createAddLanguageBody(id, lang, description);
        const response = await fetch(`${_LanguageURL}`, body);
        const data = await response.json();
        if (data.errors) {
            alert(data.errors);
        }
    }

    createAddLanguageBody(id, lang, description) {
        return {
            method: "POST",
            headers: {
                Authorization: `${localStorage.getItem("token")}`
            },
            body: this.createLanguageParams(id, lang, description)
        }
    }

    async deleteRestaurant(id) {
        const body = this.createDeleteRestaurantBody();
        const response = await fetch(`${_RestaurantURL}/${id}`, body);
        const data = await response.json();
        if (data.errors) {
            alert(data.errors);
        }
    }

    createDeleteRestaurantBody() {
        return {
            method: "DELETE",
            headers: {
                Authorization: `${localStorage.getItem("token")}`
            }
        }
    }
}