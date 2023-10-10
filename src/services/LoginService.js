
const _URL = "http://laravel.restaurants/api/login";

export default class LoginService {

    async login(email, password) {
        const data = this.createURLSearchParams(email, password);
        const response = await this.doLoginRequest(data);
        const result = await this.loginSuccesfull(response);
        if (result) {
            const token = await this.getTokenFromResponse(response);
            return token;
        } else {
            return null;
        }
    }

    createURLSearchParams(email, password) {
        const data = new URLSearchParams();
        data.append('email', email);
        data.append('password', password);
        return data;
    }

    async doLoginRequest(data) {
        return await fetch(_URL, {method: 'POST', body: data});
    }

    async loginSuccesfull(response) {
        const statusCode = await response.status;
        return statusCode == 200 ? true : false;
    }

    async getTokenFromResponse(response) {
        const data = await response.json();
        return data.access_token;
    }
}