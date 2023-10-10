const _URL = "http://laravel.restaurants/api/register";

export default class RegisterService {

    async register(name, email, password) {
        const data = this.createURLSearchParams(name, email, password);
        const response = await this.doRegisterRequest(data);
        const result = await this.registerSucces(response);
        return result ? true : this.getErrorsFromResponse(response);
    }

    createURLSearchParams(name, email, password) {
        const data = new URLSearchParams();
        data.append('name', name);
        data.append('email', email);
        data.append('password', password);
        return data;
    }

    async doRegisterRequest(data) {
        return await fetch(_URL, {method: 'POST', body: data});
    }

    async registerSucces(response) {
        const statusCode = await response.status;
        return statusCode == 204 ? true : false;
    }

    async getErrorsFromResponse(response) {
        return await response.json();
    }

}