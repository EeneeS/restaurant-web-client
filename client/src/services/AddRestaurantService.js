const _RestaurantURL = "http://laravel.restaurants/api/restaurants";

export default class AddRestaurantService {

    async addRestaurant(restaurantData) {
        const body = this.createRestaurantBody(restaurantData);
        const response = await fetch(_RestaurantURL, body);
        const data = await response.json();
        if (data.errors) {
            alert("error adding restaurant");
        }
    }

    createRestaurantBody(restaurantData) {
        return {
            method: "POST",
            headers: {
                Authorization: `${localStorage.getItem("token")}`
            },
            body: this.createRestaurantParams(restaurantData)
        }
    }

    createRestaurantParams(restaurantData) {
        const data = new URLSearchParams();
        data.append("name", restaurantData.name);
        data.append("owner", restaurantData.owner);
        data.append("kitchen", restaurantData.kitchen);
        data.append("address", restaurantData.address);
        data.append("stars", restaurantData.stars);
        data.append("restaurant_id", restaurantData.id);
        return data;
    }

}