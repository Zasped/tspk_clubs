import $api from "../http";

export default class HonorDeskService {

    static fetchHonor() {
        return $api.get(`/honor`)
    }

    static fetchHonorId(id) {
        return $api.get(`/honor/${id}`)
    }

}