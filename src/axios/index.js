import axios from "axios";

const instanse = axios.create({
    baseURL: 'http://195.38.164.30:8001/api/',
    headers: {
        'Content-Type': 'application/json',
    },
})

export const schoolApi = {
    getInfoBySchool() {
        return instanse.get('school/').then(res => res.data)
    }
}