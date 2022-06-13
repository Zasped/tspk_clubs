import $api from "../http";

export default class UserService {

    static fetchUserId(id) {
        return $api.get(`/user/${id}`)
    }

}