import $api from "../http";

export default class DepartmentService {

    static fetchDepartment() {
        return $api.get(`/department`)
    }

    static fetchDepartmentId(id) {
        return $api.get(`/department/${id}`)
    }

}