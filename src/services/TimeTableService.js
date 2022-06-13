import $api from "../http";

export default class TimeTableService {

    static fetchTimeTable(date) {
        return $api.get(`/timetable/${date}`)
    }

}