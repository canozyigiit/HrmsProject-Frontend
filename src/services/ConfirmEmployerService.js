import axios from "axios";

export default class ConfirmEmployerService {
    confirmEmployer(companyName, systemPersonnelId) {
        return axios.put("http://localhost:8080/confirmEmployer/" + companyName + "?systemPersonnelId=" + systemPersonnelId)
    }

}