import $api from "../http";

export default class ClubService {

    static fetchClubs() {
        return $api.get('/club')
    }

    static fetchClubId(id) {
        return $api.get(`/club/${id}`)
    }

}