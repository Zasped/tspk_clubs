import $api from "../http";

export default class ClubService {

    static fetchClubs() {
        return $api.get('/club')
    }

}