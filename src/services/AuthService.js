import $api from "../http";

export default class AuthService {

    static async login(email, password) {
        return $api.post('/auth/login', {email, password}).catch(err => console.log(err.errors));
    }

    static async register(email, first_name, last_name, sur_name, password) {
        return $api.post('/auth/register', {email, first_name, last_name, sur_name, password}).catch(err => console.log(err.errors));
    }

    static async logout() {
        return $api.get('/auth/logout').catch(err => console.log(err.errors));
    }

}