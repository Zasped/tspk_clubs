import $api from "../http";

export default class AuthService {

    static async login(email, password) {
        return $api.post('/auth/login', {email, password});
    }

    static async register(email, first_name, last_name, sur_name, password) {
        return $api.post('/auth/register', {email, first_name, last_name, sur_name, password});
    }

    static async logout() {
        return $api.get('/auth/logout');
    }

}