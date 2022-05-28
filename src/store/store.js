import AuthService from "../services/AuthService";
import axios from "axios";

export default class Store {
    user = {};
    isAuth = false;

    setAuth(bool) {
        this.isAuth = bool
    }

    setUser(user) {
        this.user = user;
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email, password)
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.message);
        }
    }

    async register(email, first_name, last_name, sur_name, password) {
        try {
            const response = await AuthService.register(email, first_name, last_name, sur_name, password)
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e.message);
        }
    }

    async logout() {
        try {
            await AuthService.logout()
            this.setAuth(false);
            this.setUser({});
        } catch (e) {
            console.log(e.message);
        }
    }

    async checkAuth() {
        try {
            const response = await axios.get(`${URL}/auth/refresh`, {withCredentials: true});
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            console.log(e);
        }
    }
}